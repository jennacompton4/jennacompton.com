import { EMAIL, LINKEDIN_HREF, RESUME_HREF } from "@/lib/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
] as const;

export function SiteHeader() {
  return (
    <header className="flex items-center justify-end gap-6">
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center justify-end gap-x-6 gap-y-1"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex min-h-11 items-center font-sans text-nav text-ink transition-colors duration-150 ease-out hover:text-accent md:min-h-0"
          >
            {link.label}
          </a>
        ))}
        <a
          href={RESUME_HREF}
          target="_blank"
          rel="noreferrer"
          className="link-accent inline-flex min-h-11 items-center font-sans text-nav text-ink transition-colors duration-150 ease-out hover:text-accent md:min-h-0"
        >
          Resume
        </a>
        <a
          href={LINKEDIN_HREF}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center font-sans text-nav text-ink transition-colors duration-150 ease-out hover:text-accent md:min-h-0"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex min-h-11 items-center font-sans text-nav text-ink transition-colors duration-150 ease-out hover:text-accent md:min-h-0"
        >
          Email
        </a>
      </nav>
    </header>
  );
}
