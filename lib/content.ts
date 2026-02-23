import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getBlogPosts() {
  const blogDirectory = path.join(contentDirectory, 'blog');
  const filenames = fs.readdirSync(blogDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      readingTime: data.readingTime,
      coverImage: data.coverImage,
      content,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, 'blog', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    readingTime: data.readingTime,
    coverImage: data.coverImage,
    content,
  };
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  status: string;
  link: string;
  linkLabel: string;
  order: number;
}

export async function getProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      description: data.description,
      techStack: data.techStack,
      status: data.status,
      link: data.link,
      linkLabel: data.linkLabel,
      order: data.order || 99,
    };
  });

  return projects.sort((a, b) => a.order - b.order);
}

export async function getUpdates() {
  const updatesDirectory = path.join(contentDirectory, 'updates');
  const filenames = fs.readdirSync(updatesDirectory);

  const updates = filenames.map((filename) => {
    const filePath = path.join(updatesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      date: data.date,
      tags: data.tags,
      content: content.trim(),
    };
  });

  return updates.sort((a, b) => (a.date < b.date ? 1 : -1));
}
