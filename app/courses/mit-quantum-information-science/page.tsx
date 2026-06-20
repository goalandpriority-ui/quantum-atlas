import CoursePage from "@/components/CoursePage";
import { getCourseBySlug } from "@/lib/content/courses-new";
import { notFound } from "next/navigation";

export default function Page() {
  const course = getCourseBySlug("mit-quantum-information-science");
  if (!course) return notFound();
  return <CoursePage course={course} />;
}

