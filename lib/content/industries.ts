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
  {
    slug: "energy",
    name: "Quantum for Energy & Climate",
    tagline: "Battery materials, grid optimization, and carbon capture chemistry",
    summary:
      "From designing better battery materials to optimizing power grids, energy is an area where quantum simulation and optimization algorithms show genuine, if early-stage, promise.",
    maturity: "early-pilots",
  },
  {
    slug: "manufacturing",
    name: "Quantum for Manufacturing & Materials Science",
    tagline: "New materials discovery, catalysts, and quality optimization",
    summary:
      "Designing new materials and catalysts at the atomic level is fundamentally a quantum simulation problem, making manufacturing and materials science a natural application area.",
    maturity: "early-pilots",
  },
  {
    slug: "telecommunications",
    name: "Quantum for Telecommunications",
    tagline: "Quantum networking, secure communication, and network optimization",
    summary:
      "Telecom carriers are exploring quantum key distribution for secure links and quantum-inspired optimization for network routing, while also building toward a future quantum internet.",
    maturity: "early-pilots",
  },
  {
    slug: "aerospace-defense",
    name: "Quantum for Aerospace & Defense",
    tagline: "Sensing, navigation, secure communications, and materials simulation",
    summary:
      "Defense and aerospace agencies are major funders of quantum research, particularly for quantum sensing, GPS-independent navigation, and secure communications.",
    maturity: "early-pilots",
  },
  {
    slug: "automotive",
    name: "Quantum for Automotive",
    tagline: "Battery chemistry, supply chain optimization, and autonomous systems",
    summary:
      "Automakers are exploring quantum computing for battery material design, manufacturing optimization, and as a longer-term tool for autonomous vehicle algorithm development.",
    maturity: "exploratory",
  },
  {
    slug: "agriculture",
    name: "Quantum for Agriculture",
    tagline: "Crop optimization, fertilizer chemistry, and supply chain modeling",
    summary:
      "One of the most exploratory application areas, where quantum simulation of nitrogen-fixing chemistry and optimization of agricultural supply chains are being investigated for long-term potential.",
    maturity: "exploratory",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
