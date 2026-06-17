export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  maturity: "exploratory" | "early-pilots" | "active-deployment";
};

export const industries: Industry[] = [
  {
    slug: "finance",
    name: "Quantum for Finance",
    tagline: "Portfolio optimization, risk modeling, and derivatives pricing",
    summary:
      "Financial institutions are exploring quantum algorithms for optimization and Monte Carlo-style simulations — among the most actively piloted near-term applications.",
    maturity: "early-pilots",
  },
  {
    slug: "healthcare",
    name: "Quantum for Healthcare",
    tagline: "Drug discovery, molecular simulation, and genomics",
    summary:
      "Quantum computing's most scientifically grounded near-term application: simulating molecules for drug discovery and understanding biological systems at the quantum level.",
    maturity: "early-pilots",
  },
  {
    slug: "logistics",
    name: "Quantum for Logistics",
    tagline: "Route optimization, scheduling, and supply chain efficiency",
    summary:
      "Optimization-heavy logistics problems are a natural testing ground for quantum and quantum-inspired algorithms, with several companies running active pilots.",
    maturity: "early-pilots",
  },
  {
    slug: "cybersecurity",
    name: "Quantum for Cybersecurity",
    tagline: "Post-quantum cryptography and quantum key distribution",
    summary:
      "Both a long-term threat (to current encryption) and a source of new tools (quantum key distribution) — the most mature quantum application from a deployment standpoint.",
    maturity: "active-deployment",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}

