export const site = {
  name: "Artifact Interactive",
  category: "Learning Intelligence Platform",
  url: "https://artifactinteractive.com",
  description:
    "Artifact Interactive creates Learning Intelligence Platforms that turn everyday learning activity into intelligence institutions can use.",
  /** Every address on the site resolves here — footer, contact panel,
   *  contact form delivery, and the privacy and terms notices. */
  email: "andrew@artifactintelligence.co",
  cta: {
    primary: { label: "Explore Learning Intelligence", href: "/platform" },
    secondary: { label: "Talk With Artifact", href: "/contact" },
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: { label: string; href: string; description: string }[];
};

export const navigation: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    description: "The intelligence layer between experience and outcome.",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
    description: "Capture, connect, understand, model, act, learn.",
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "Bespoke learning operating systems.",
    children: [
      {
        label: "Higher Education",
        href: "/solutions/higher-education",
        description: "Students, faculty, programs, and institutional outcomes.",
      },
      {
        label: "High Schools",
        href: "/solutions/high-schools",
        description: "Earlier visibility into engagement and pathways.",
      },
      {
        label: "Business & Workforce",
        href: "/solutions/business",
        description: "Skills, training effectiveness, and knowledge transfer.",
      },
    ],
  },
  {
    label: "Research",
    href: "/research",
    description: "Building the discipline of Learning Intelligence.",
  },
  {
    label: "Insights",
    href: "/insights",
    description: "Writing on learning, data, behavior, and intelligence.",
  },
  {
    label: "About",
    href: "/about",
    description: "Designers, technologists, strategists, researchers.",
  },
];

export const footerNav = {
  platform: [
    { label: "Platform", href: "/platform" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Research", href: "/research" },
  ],
  solutions: [
    { label: "Higher Education", href: "/solutions/higher-education" },
    { label: "High Schools", href: "/solutions/high-schools" },
    { label: "Business & Workforce", href: "/solutions/business" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

/** The brand spine — language reused deliberately across the site. */
export const brandLines = {
  signalChain: [
    "Learning leaves signals.",
    "Signals become patterns.",
    "Patterns become intelligence.",
    "Intelligence reveals paths.",
  ],
  promise: [
    "Understand what is happening.",
    "See what may happen next.",
    "Discover better paths forward.",
  ],
} as const;
