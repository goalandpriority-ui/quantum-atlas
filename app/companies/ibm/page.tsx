import CompanyPage from "@/components/CompanyPage";
import { getCompanyBySlug } from "@/lib/content/companies";
import { notFound } from "next/navigation";

export const metadata = {
  title: "IBM — Quantum Company Profile | QuantumAtlas",
  description: "IBM's quantum computing program: founding, leadership, technology, products, and news.",
};

export default function IBMPage() {
  const company = getCompanyBySlug("ibm");
  if (!company) return notFound();
  return <CompanyPage company={company} />;
}
