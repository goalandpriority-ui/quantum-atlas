import { companies } from "@/lib/content/companies";
import CompanyPage from "@/components/CompanyPage";
import { notFound } from "next/navigation";

export default function Page() {
  const company = companies.find((c) => c.slug === "zapata-ai");
  if (!company) return notFound();
  return <CompanyPage company={company} />;
}

export async function generateMetadata() {
  const company = companies.find((c) => c.slug === "zapata-ai");
  if (!company) return {};
  return {
    title: company.name,
    description: company.summary,
  };
}

