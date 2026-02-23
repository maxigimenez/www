import { getBlogPostBySlug, getBlogPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <Link
        href="/blog"
        className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← back to blog
      </Link>

      <header className="mb-10">
        <h1 className="text-2xl mb-3">{post.title}</h1>
        <div className="flex items-center gap-4 mb-6">
          <time className="font-mono text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="font-mono text-xs text-muted-foreground">
            {post.readingTime}
          </span>
        </div>
        {post.coverImage && (
          <img
            src={`/blog/${post.coverImage}.jpg`}
            alt={post.title}
            className="w-full h-56 md:h-72 object-cover rounded-md border border-border"
          />
        )}
      </header>

      <div className="prose-custom">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
