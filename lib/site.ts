export const SITE = {
  name: "IC3 Labs",
  legalName: "IC3 Labs LLC",
  url: "https://www.ic3labs.com",
  tagline: "We build products people love.",
  description:
    "IC3 Labs is an independent product studio founded to create digital experiences that make life a little better — one thoughtful product at a time.",
  ogDescription: "An independent product studio in Atlanta, GA. Makers of DecipherIQ.",
  email: "admin@ic3labs.com",
  addressLines: ["8735 Dunwoody Place Ste R", "Atlanta, GA 30350, USA"],
  decipheriq: "https://decipheriq.ai",
} as const;

export const PARTNERS = [
  {
    initials: "KN",
    email: "krishna@ic3labs.com",
    name: "Krishna Nair",
    title: "Co-Founder & Product Evangelist, IC3 Labs",
    bioColor: "#3A3733",
    bio: "A seasoned product leader with over two decades of experience building and scaling digital products at Media and Tech companies. A Cornell MBA grad, with a background in business strategy and product development, he founded IC3 Labs to build the kind of thoughtful, user-centric software he always believed was possible but rarely saw prioritized.",
  },
  {
    initials: "AG",
    email: "aj@ic3labs.com",
    name: "Ajoy Ganguly",
    title: "Co-Founder & Operations Evangelist, IC3 Labs",
    bioColor: "#8A847A",
    bio: "",
  },
  {
    initials: "SS",
    email: "shyam@ic3labs.com",
    name: "Shyam Singh",
    title: "Co-Founder & Tech Evangelist, IC3 Labs",
    bioColor: "#3A3733",
    bio: "A technologist with over three decades building foundational products at leading FAANG companies and startups. He co-founded IC3 Labs to turn complex innovation into consumer technology that feels intuitive and personal — making everyday life simpler, smarter, and more meaningful.",
  },
] as const;

export const HEADLINES = [
  "Streaming giants rethink bundles as subscriber growth stalls",
  "Fed signals patience as inflation cools for a third month",
  "Chipmakers race to secure supply for next-gen AI models",
  "Ad budgets shift toward retail media networks",
  "Bond yields climb as markets price in fewer rate cuts",
] as const;

export const SCREENS = [
  { src: "/screenshots/insights.png", alt: "DecipherIQ Your Key Insights screen", caption: "Your key insights" },
  { src: "/screenshots/headlines.png", alt: "DecipherIQ Top Headlines screen", caption: "Top headlines" },
  { src: "/screenshots/ask-deci.png", alt: "DecipherIQ Ask Deci screen", caption: "Ask Deci" },
] as const;
