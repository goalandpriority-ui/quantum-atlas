import PersonPage from "@/components/PersonPage";
import { getPersonBySlug } from "@/lib/content/people";
import { notFound } from "next/navigation";

export default function Page() {
  const person = getPersonBySlug("william-wootters");
  if (!person) return notFound();
  return <PersonPage person={person} />;
}

