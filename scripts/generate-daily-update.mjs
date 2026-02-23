import { GoogleGenerativeAI } from "@google/generative-ai";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is not set");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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

  // Get commits from today that include #bip
  let commits;
  try {
    commits = execSync(`git log --since="${today} 00:00:00" --grep="#bip" --pretty=format:"- %s"`).toString().trim();
  } catch (error) {
    console.error("Error fetching commits:", error);
    process.exit(1);
  }

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
