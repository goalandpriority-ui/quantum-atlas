import CompanyPage from "@/components/CompanyPage";
import { getCompanyBySlug } from "@/lib/content/companies";
import { notFound } from "next/navigation";

export default function Page() {
  const company = getCompanyBySlug("rigetti");
  if (!company) return notFound();
  return <CompanyPage company={company} />;
}

