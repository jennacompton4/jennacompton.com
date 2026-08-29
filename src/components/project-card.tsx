import { ArrowUpRight } from "lucide-react";
import type { projects } from "@/lib/site";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="project-frame overflow-hidden rounded-md bg-surface">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1792}
          height={1008}
          className="aspect-video w-full object-cover"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-3">
        <p className="font-sans text-label font-medium uppercase tracking-label text-mid">
          {project.kicker}
        </p>
        {project.href ? (
          <ArrowUpRight
            className="size-4 shrink-0 text-mid transition-colors duration-150 group-hover:text-accent"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        ) : (
          <span className="font-sans text-label uppercase tracking-label text-mid">
            Private
          </span>
        )}
      </div>
      <h3 className="mt-2 font-display text-card-title leading-snug tracking-hero text-ink">
        {project.name}
      </h3>
      <p className="mt-3 font-sans text-body leading-body text-pretty text-ink">
        {project.summary}
      </p>
    </>
  );

  const className =
    "group block rounded-lg bg-paper p-2 text-ink shadow-card transition-[box-shadow,transform] duration-150 ease-out motion-safe:hover:-translate-y-0.5 shadow-card-hover";

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return <article className={className}>{inner}</article>;
}
