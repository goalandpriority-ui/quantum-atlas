import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache results for 1 hour

type AdzunaJob = {
  title: string;
  description: string;
  company: { display_name: string };
  location: { display_name: string };
  redirect_url: string;
  created: string;
  salary_min?: number;
  salary_max?: number;
  contract_type?: string;
};

function categorize(title: string, description: string): "research" | "software" | "hardware" | "internship" {
  const text = (title + " " + description).toLowerCase();
  if (text.match(/intern|graduate program|co-op/)) return "internship";
  if (text.match(/hardware|fabrication|cryogenic|photonic|ion trap|chip design|rf engineer/)) return "hardware";
  if (text.match(/research scientist|research fellow|postdoc|phd researcher/)) return "research";
  return "software";
}

export async function GET() {
  const appId = process.env.ADZUNA_APP_ID;
  const appKey = process.env.ADZUNA_APP_KEY;

  if (!appId || !appKey) {
    return NextResponse.json(
      { error: "ADZUNA_APP_ID or ADZUNA_APP_KEY not configured", items: [] },
      { status: 200 }
    );
  }

  try {
    const url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${appKey}&what=quantum%20computing&results_per_page=20&sort_by=date`;

    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Adzuna request failed: ${res.status}`, items: [] },
        { status: 200 }
      );
    }

    const data = await res.json();
    const jobs: AdzunaJob[] = data.results || [];

    const items = jobs
      .filter((j) => j.title)
      .map((j, i) => ({
        slug: `live-${i}-${j.created}`,
        title: j.title.replace(/<[^>]*>/g, ""),
        company: j.company?.display_name || "Company not specified",
        location: j.location?.display_name || "Location not specified",
        description: (j.description || "No description available.")
          .replace(/<[^>]*>/g, "")
          .slice(0, 220) + "...",
        category: categorize(j.title, j.description || ""),
        contractType: j.contract_type || null,
        salaryMin: j.salary_min || null,
        salaryMax: j.salary_max || null,
        date: new Date(j.created).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        url: j.redirect_url,
      }));

    return NextResponse.json({ items, fetchedAt: new Date().toISOString() });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch jobs", items: [] },
      { status: 200 }
    );
  }
}

