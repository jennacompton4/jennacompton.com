export const EMAIL = "jenna.compton@gmail.com";
export const RESUME_HREF = "/jenna-compton-resume.pdf";
export const LINKEDIN_HREF = "https://www.linkedin.com/in/comptonjenna/";

export const workItems = [
  {
    label: "Motions",
    title: "Marketplace, ACE, MDF",
    body: "I lead partner marketing for Zendesk’s AWS partnership. Marketplace, ACE co-sell, co-marketing, and I steward the MDF behind it.",
  },
  {
    label: "Pipeline",
    title: "Q2’26",
    body: "Last quarter I influenced just under $1M in pipeline, mostly new business in EMEA and APAC. Over $1M Stage 2 this fiscal year.",
  },
  {
    label: "Focus",
    title: "GenAI narrative + pipe",
    body: "My focus is developing our joint narrative around GenAI and building demand around the Zendesk + AWS joint solution.",
  },
] as const;

export const projects = [
  {
    slug: "junior-golf-scout",
    name: "Junior Golf Scout",
    kicker: "NCAA D2 men’s golf",
    href: "https://juniorgolfscout.com",
    image: "/projects/junior-golf-scout.jpg",
    imageAlt:
      "Junior Golf Scout homepage with a live watchlist of junior golfers and a Texas tournament board.",
    summary:
      "A recruiting tool I built for NCAA D2 men’s golf coaches. Browse junior tournaments, watch prospects, plan recruiting trips, and send email reports.",
  },
  {
    slug: "ochoa-school",
    name: "Ochoa School",
    kicker: "Homeschool dashboard",
    href: null as string | null,
    image: "/projects/ochoa-school.jpg",
    imageAlt:
      "A homeschool dashboard open on a laptop, with printed worksheets on a wooden desk.",
    summary:
      "A homeschool dashboard I built to track my kiddo's lessons with their tutor. Have each day's teacher instructions and worksheets printed with one click.",
  },
  {
    slug: "axolotl-matholotl",
    name: "Axolotl Matholotl",
    kicker: "Math game for kids",
    href: "https://axolotlmatholotl.com",
    image: "/projects/axolotl-matholotl.jpg",
    imageAlt:
      "Axolotl Matholotl homepage with a pink axolotl illustration and a Play free demo button.",
    summary:
      "A math game kids can actually sit down and play. Parents hold the account. Kids get the axolotl. I made it to see if I could, then kept going.",
  },
] as const;
