import { getProjects } from '@/lib/content';

const statusColors: Record<string, string> = {
  active: 'text-primary',
  shipped: 'text-foreground',
  paused: 'text-muted-foreground',
  exit: 'text-red-500',
  shutdown: 'text-yellow-500',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-2xl mb-2 font-semibold">Projects</h1>
      <p className="font-serif text-muted-foreground mb-10">
        Things I'm building, have built, or put on hold.
      </p>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <article key={project.slug} className="group">
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <h2 className="text-base font-mono font-medium">
                {project.link ?
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {project.title}
                  </a>
                  : project.title}
              </h2>
              <span className={`font-mono text-xs ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>
            <p className="font-serif text-sm text-muted-foreground leading-relaxed mb-2">
              {project.description}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
