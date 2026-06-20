import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache results for 1 hour

type NewsApiArticle = {
  title: string;
  description: string | null;
  source: { name: string };
  publishedAt: string;
  url: string;
};

function categorize(title: string, description: string): "hardware" | "research" | "industry" | "policy" {
  const text = (title + " " + description).toLowerCase();
  if (text.match(/qubit|processor|chip|hardware|ion trap|superconduct/)) return "hardware";
  if (text.match(/paper|study|research|university|published|arxiv/)) return "research";
  if (text.match(/regulat|nist|government|policy|standard|law/)) return "policy";
  return "industry";
}

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "NEWS_API_KEY not configured", items: [] },
      { status: 200 }
    );
  }

  try {
    const url = `https://newsapi.org/v2/everything?q=%22quantum%20computing%22&language=en&sortBy=publishedAt&pageSize=12&apiKey=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `NewsAPI request failed: ${res.status}`, items: [] },
        { status: 200 }
      );
    }

    const data = await res.json();
    const articles: NewsApiArticle[] = data.articles || [];

    const items = articles
      .filter((a) => a.title && a.title !== "[Removed]")
      .map((a, i) => ({
        slug: `live-${i}-${a.publishedAt}`,
        title: a.title,
        summary: a.description || "No summary available.",
        source: a.source?.name || "Unknown source",
        date: new Date(a.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        category: categorize(a.title, a.description || ""),
        url: a.url,
      }));

    return NextResponse.json({ items, fetchedAt: new Date().toISOString() });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch news", items: [] },
      { status: 200 }
    );
  }
}

