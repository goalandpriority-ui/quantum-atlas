import CoursePage from "@/components/CoursePage";
import { getCourseBySlug } from "@/lib/content/courses";
import { notFound } from "next/navigation";

export default function Page() {
  const course = getCourseBySlug("ibm-quantum-developer-certification");
  if (!course) return notFound();
  return <CoursePage course={course} />;
}
