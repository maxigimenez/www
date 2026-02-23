import Link from 'next/link';
import { getBlogPosts } from '@/lib/content';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      <h1 className="text-2xl mb-2 font-semibold">Blog</h1>
      <p className="font-serif text-muted-foreground mb-10">
        Writing about engineering, leadership, and building things.
      </p>

      <div className="flex flex-col gap-10">
        {posts.map((post) => (
          <article key={post.slug}>
            {post.coverImage && (
              <Link href={`/blog/${post.slug}`} className="block mb-4">
                <img
                  src={`/blog/${post.coverImage}.jpg`}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-md border border-border"
                  loading="lazy"
                />
              </Link>
            )}
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <h2 className="text-base font-mono font-medium">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                {post.readingTime}
              </span>
            </div>
            <p className="font-serif text-sm text-muted-foreground leading-relaxed mb-1">
              {post.excerpt}
            </p>
            <time className="font-mono text-xs text-muted-foreground">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
}
