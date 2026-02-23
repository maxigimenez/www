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
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateSummary() {
  const today = new Date().toISOString().split('T')[0];
  const outputDir = path.join(process.cwd(), 'content', 'updates');
  const outputFile = path.join(outputDir, `${today}.md`);

  // Check if we already have an entry for today
  if (fs.existsSync(outputFile)) {
    console.log(`Update for ${today} already exists. Skipping.`);
    return;
  }

  // Get commits from today
  // git log --since="today 00:00:00" --pretty=format:"%s"
  let commits;
  try {
    commits = execSync(`git log --since="${today} 00:00:00" --pretty=format:"- %s"`).toString().trim();
  } catch (error) {
    console.error("Error fetching commits:", error);
    process.exit(1);
  }

  if (!commits) {
    console.log("No commits found for today.");
    return;
  }

  const prompt = `You are a professional software engineer. I will give you a list of my git commit messages from today. 
Summarize them into a single, concise paragraph (2-3 sentences max) for my "Engineering Log" timeline. 
Use a professional yet personal tone. 
Focus on what was achieved or improved. 
The output should be just the summary text in Markdown format (use bold for project names or key features if applicable).

Commit messages:
${commits}`;

  try {
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
    console.log(`Generated daily update: ${outputFile}`);
  } catch (error) {
    console.error("Error generating summary:", error);
    process.exit(1);
  }
}

generateSummary();
