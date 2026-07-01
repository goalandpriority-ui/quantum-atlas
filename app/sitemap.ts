import { MetadataRoute } from "next";
import { dictionaryTerms } from "@/lib/content/dictionary";
import { algorithms } from "@/lib/content/algorithms";
import { processors } from "@/lib/content/hardware";
import { companies } from "@/lib/content/companies";
import { industries } from "@/lib/content/industries";
import { researchPapers } from "@/lib/content/research";
import { learningLevels } from "@/lib/content/learning";
import { courses } from "@/lib/content/courses";
import { people } from "@/lib/content/people";

const BASE_URL = "https://quantumatlas.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static top-level pages
  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/learn", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/dictionary", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/algorithms", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/hardware", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/companies", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/industries", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/research", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/myths", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/timeline", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/quantum-vs-classical", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/quantum-vs-ai", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/future", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/news", priority: 0.9, changeFrequency: "hourly" as const },
    { url: "/courses", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/jobs", priority: 0.9, changeFrequency: "hourly" as const },
    { url: "/tools", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/compare", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/search", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/glossary", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/pop-culture", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/hype-cycle", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/quantum-vs-supercomputers", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/quantum-vs-blockchain", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/investment-tracker", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/patents", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/industry-readiness", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/race", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/grovers-builder", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/entanglement-visualizer", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/vendor-comparison", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/daily-challenge", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/badges", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/people", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/countries", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/quiz", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/salary", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/circuit-builder", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/guide/quantum-computing-complete-guide", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/contact", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/disclaimer", priority: 0.3, changeFrequency: "yearly" as const },
  ].map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Dynamic content pages
  const dictionaryPages = dictionaryTerms.map((t) => ({
    url: `${BASE_URL}/dictionary/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const algorithmPages = algorithms.map((a) => ({
    url: `${BASE_URL}/algorithms/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const hardwarePages = processors.map((p) => ({
    url: `${BASE_URL}/hardware/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const companyPages = companies.map((c) => ({
    url: `${BASE_URL}/companies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const industryPages = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const researchPages = researchPapers.map((r) => ({
    url: `${BASE_URL}/research/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const learnPages = learningLevels.flatMap((level) =>
    level.articles.map((article) => ({
      url: `${BASE_URL}/learn/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const coursePages = courses.map((c) => ({
    url: `${BASE_URL}/courses/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const peoplePages = people.map((p) => ({
    url: `${BASE_URL}/people/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...dictionaryPages,
    ...algorithmPages,
    ...hardwarePages,
    ...companyPages,
    ...industryPages,
    ...researchPages,
    ...learnPages,
    ...coursePages,
    ...peoplePages,
  ];
}
