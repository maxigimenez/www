import ReactMarkdown from 'react-markdown';
import { getUpdates } from '@/lib/content';

export default async function TimelinePage() {
  const updates = await getUpdates();

  return (
    <div>
      <h1 className="text-2xl mb-2 font-semibold">Timeline</h1>
      <p className="font-serif text-muted-foreground mb-10">
        An engineering logbook. Short updates on what I'm building and thinking about.
      </p>

      <div className="flex flex-col gap-0">
        {updates.map((update, index) => (
          <div key={index} className="flex gap-4 pb-8 relative">
            {/* Timeline line */}
            {index < updates.length - 1 && (
              <div className="absolute left-[5px] top-3 bottom-0 w-px bg-border" />
            )}

            {/* Dot */}
            <div className="w-[11px] h-[11px] rounded-full bg-primary/40 border-2 border-primary mt-1.5 flex-shrink-0 relative z-10" />

            <div className="flex-1 min-w-0">
              <time className="font-mono text-xs text-muted-foreground block mb-1">
                {new Date(update.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <div className="font-serif text-sm leading-relaxed text-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p>{children}</p>,
                  }}
                >
                  {update.content}
                </ReactMarkdown>
              </div>
              {update.tags && (
                <div className="flex gap-1.5 mt-2">
                  {update.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
