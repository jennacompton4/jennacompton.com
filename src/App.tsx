import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { projects, workItems } from "@/lib/site";

export default function App() {
  return (
    <div id="top" className="min-h-dvh bg-paper text-ink">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-gutter focus:top-4 focus:z-20 focus:bg-paper focus:px-3 focus:py-2 focus:text-nav"
      >
        Skip to work
      </a>

      <div className="px-gutter">
        <div className="mx-auto w-full max-w-shell pb-24 pt-8 md:pb-32 md:pt-10">
          <SiteHeader />

          <main>
            <section
              className="mt-hero grid grid-cols-1 items-center gap-10 md:grid-cols-hero md:gap-16"
              aria-label="Introduction"
            >
              <div className="max-w-measure">
                <p className="font-sans text-label font-medium uppercase tracking-label text-mid">
                  Partner marketing · Zendesk × AWS
                </p>
                <h1 className="type-hero mt-4 font-display text-hero leading-hero tracking-hero text-pretty text-ink">
                  Hi there, I’m Jenna 👋 I lead partner marketing for Zendesk’s AWS
                  partnership.
                </h1>
                <p className="type-lede mt-6 font-display text-lede leading-lede text-pretty text-ink">
                  Marketplace, ACE co-sell, co-marketing, and steward the MDF
                  behind it.
                </p>
                <p className="mt-5 font-sans text-body leading-body text-pretty text-ink">
                  Last quarter (Q2’26) I influenced $810K+ in pipeline, mostly new
                  business in EMEA and APAC. $1.3M Stage 2 this fiscal year. My
                  focus is developing our joint narrative around GenAI and building
                  demand around the Zendesk + AWS joint solution.
                </p>
                <p className="mt-5 font-sans text-body leading-body text-pretty text-ink">
                  Outside of work, I’ve been using AI to make learning tools for
                  my kids, apps for my husband, and sometimes writing about that
                  as I go.
                </p>
              </div>
              <img
                src="/jenna-chibi.png"
                alt="Painted portrait of Jenna"
                width={1152}
                height={1596}
                className="img-bare mx-auto w-44 md:w-full"
              />
            </section>

            <section id="work" className="mt-section scroll-mt-8">
              <header className="grid grid-cols-1 items-baseline gap-x-10 gap-y-2 md:grid-cols-work">
                <h2 className="font-sans text-label font-medium uppercase tracking-label text-mid">
                  Work
                </h2>
                <p className="font-sans text-label font-medium uppercase tracking-label text-mid">
                  What I can share
                </p>
              </header>

              <ul className="mt-10 list-none space-y-12 p-0 md:space-y-16">
                {workItems.map((item) => (
                  <li
                    key={item.label}
                    className="grid grid-cols-1 items-baseline gap-x-10 gap-y-2 md:grid-cols-work"
                  >
                    <p className="font-sans text-label font-medium uppercase tracking-label text-mid">
                      {item.label}
                    </p>
                    <div>
                      <h3 className="font-display text-card-title leading-snug tracking-hero text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-measure font-sans text-body leading-body text-pretty text-ink">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section id="projects" className="mt-section scroll-mt-8">
              <h2 className="font-sans text-label font-medium uppercase tracking-label text-mid">
                Projects
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
