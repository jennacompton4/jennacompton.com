export const EMAIL = "jenna.compton@gmail.com";
export const RESUME_HREF = "/resume.pdf";
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
    body: "Last quarter I influenced $810K+ in pipeline, mostly new business in EMEA and APAC. $1.3M Stage 2 this fiscal year.",
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
    href: null as string | null,
    image: "/projects/junior-golf-scout.jpg",
    imageAlt:
      "A laptop on a wooden desk showing a junior golf recruiting dashboard, with a scorecard and golf ball beside it.",
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
      "A private day-of-school dashboard I built for our house. Today’s plan, subject tracks, printables, and a weekly rhythm — so the school day has a place to live.",
  },
  {
    slug: "axolotl-matholotl",
    name: "Axolotl Matholotl",
    kicker: "Math game for kids",
    href: "https://axolotlmatholotl.com",
    image: "/projects/axolotl-matholotl.jpg",
    imageAlt:
      "A pink axolotl beside a tablet showing a simple addition problem.",
    summary:
      "A math game kids can actually sit down and play. Parents hold the account. Kids get the axolotl. I made it to see if I could, then kept going.",
  },
] as const;
