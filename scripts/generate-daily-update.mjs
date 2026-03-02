import { GoogleGenerativeAI } from "@google/generative-ai";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const TRACKED_REPOS_TOKEN = process.env.TRACKED_REPOS_TOKEN;
const TRACKED_REPOS = [
  { repo: "maxigimenez/www", label: "personal page" },
  { repo: "maxigimenez/annu.dev", label: "annu.dev" },
  { repo: "maxigimenez/taplands", label: "taplands" },
];

if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is not set");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getUtcDayBounds(dateString) {
  return {
    sinceDateTime: `${dateString}T00:00:00Z`,
    untilDateTime: `${dateString}T23:59:59Z`
  };
}

function normalizeCommitLine(repo, message) {
  const firstLine = (message || "").split("\n")[0].trim();
  if (!firstLine) {
    return null;
  }
  return `- [${repo}] ${firstLine}`;
}

function getLocalRepoName() {
  try {
    const remoteUrl = execSync("git config --get remote.origin.url").toString().trim();
    const match = remoteUrl.match(/[:/]([^/]+\/[^/.]+)(?:\.git)?$/);
    if (match && match[1]) {
      return match[1];
    }
  } catch {
    // Fall back to current directory name below.
  }
  return path.basename(process.cwd());
}

function getLocalBipCommitsForDay(dateString) {
  try {
    const raw = execSync(`git log --since="${dateString} 00:00:00" --pretty=format:"%s"`).toString().trim();
    if (!raw) {
      return [];
    }
    const repoName = getLocalRepoName();
    return raw
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.toLowerCase().includes("#bip"))
      .map(line => normalizeCommitLine(repoName, line))
      .filter(Boolean);
  } catch (error) {
    console.error("Error fetching local commits:", error);
    process.exit(1);
  }
}

async function fetchRepoCommits(repo, displayName, token, sinceDateTime, untilDateTime) {
  const allCommits = [];
  let page = 1;

  while (true) {
    const url = new URL(`https://api.github.com/repos/${repo}/commits`);
    url.searchParams.set("since", sinceDateTime);
    url.searchParams.set("until", untilDateTime);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("page", String(page));

    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "User-Agent": "daily-timeline-update-script",
        "X-GitHub-Api-Version": "2022-11-28"
      }
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Failed to fetch commits for ${repo} (${response.status}): ${body}`);
    }

    const pageCommits = await response.json();
    if (!Array.isArray(pageCommits) || pageCommits.length === 0) {
      break;
    }

    allCommits.push(...pageCommits);
    if (pageCommits.length < 100) {
      break;
    }
    page += 1;
  }

  return allCommits
    .map(commit => commit?.commit?.message || "")
    .filter(message => message.toLowerCase().includes("#bip"))
    .map(message => normalizeCommitLine(displayName, message))
    .filter(Boolean);
}

async function getTrackedRepoBipCommitsForDay(dateString) {
  if (TRACKED_REPOS.length === 0) {
    return [];
  }

  if (!TRACKED_REPOS_TOKEN) {
    console.warn("TRACKED_REPOS_TOKEN is missing. Skipping tracked repos.");
    return [];
  }

  const { sinceDateTime, untilDateTime } = getUtcDayBounds(dateString);
  const commitsByRepo = await Promise.all(
    TRACKED_REPOS.map(async trackedRepo => {
      try {
        const commits = await fetchRepoCommits(
          trackedRepo.repo,
          trackedRepo.label || trackedRepo.repo,
          TRACKED_REPOS_TOKEN,
          sinceDateTime,
          untilDateTime
        );
        return commits;
      } catch (error) {
        console.warn(`Unable to fetch commits from ${trackedRepo.repo}: ${error.message}`);
        return [];
      }
    })
  );

  return commitsByRepo.flat();
}

async function generateSummary(retryCount = 0) {
  const today = new Date().toISOString().split('T')[0];
  const outputDir = path.join(process.cwd(), 'content', 'updates');
  const outputFile = path.join(outputDir, `${today}.md`);

  // Check if we already have an entry for today
  if (fs.existsSync(outputFile)) {
    console.log(`Update for ${today} already exists. Skipping.`);
    return;
  }

  // Get project names for context
  const projectsDir = path.join(process.cwd(), 'content', 'projects');
  const projectNames = fs.readdirSync(projectsDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));

  const localCommits = getLocalBipCommitsForDay(today);
  const trackedRepoCommits = await getTrackedRepoBipCommitsForDay(today);
  const allCommits = [...localCommits, ...trackedRepoCommits];
  const commits = allCommits.join("\n");

  if (!commits) {
    console.log("No #bip commits found for today. Skipping update.");
    return;
  }

  const prompt = `You are a professional software engineer building in public. I will give you a list of my git commit messages from today that are tagged with #bip (build in public). 
Summarize them into a single, concise paragraph (2-3 sentences max) for my "Engineering Log" timeline.

Context:
- Projects I am working on: ${projectNames.join(', ')}
- Goal: Create a professional, engaging "Build in Public" update.
- Tone: Professional, personal, and momentum-focused.
- Formatting: Use bold for project names and key features. Return ONLY the markdown text.

Commit messages:
${commits}`;

  // Try different model variants in order of preference from the verified list
  const modelsToTry = [
    "gemini-2.5-flash",
    "gemini-flash-latest",
    "gemini-2.0-flash-lite",
    "gemini-2.0-flash"
  ];
  let lastError;

  for (const modelName of modelsToTry) {
    try {
      console.log(`Attempting to use model: ${modelName}`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const summary = response.text().trim();

      const fileContent = `---
date: '${today}'
tags: ['automated', 'daily-update']
---
${summary}
`;

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputFile, fileContent);
      console.log(`Generated daily update: ${outputFile} using ${modelName}`);
      return; // Success!
    } catch (error) {
      lastError = error;
      console.warn(`Model ${modelName} failed: ${error.message}`);
      
      // If it's a rate limit (429), we wait and retry
      if (error.status === 429 && retryCount < 3) {
        const waitTime = 30000; 
        console.warn(`Quota/Rate limit hit on ${modelName}. Retrying in ${waitTime/1000}s... (Attempt ${retryCount + 1}/3)`);
        await sleep(waitTime);
        return generateSummary(retryCount + 1);
      }
    }
  }

  console.error("All models failed. Last error:", lastError);
  process.exit(1);
}

generateSummary();
