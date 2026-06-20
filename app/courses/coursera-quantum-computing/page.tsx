import CoursePage from "@/components/CoursePage";
import { getCourseBySlug } from "@/lib/content/courses-new";
import { notFound } from "next/navigation";

export default function Page() {
  const course = getCourseBySlug("coursera-quantum-computing");
  if (!course) return notFound();
  return <CoursePage course={course} />;
}

