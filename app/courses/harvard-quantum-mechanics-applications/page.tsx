import CoursePage from "@/components/CoursePage";
import { getCourseBySlug } from "@/lib/content/courses";
import { notFound } from "next/navigation";

export default function Page() {
  const course = getCourseBySlug("harvard-quantum-mechanics-applications");
  if (!course) return notFound();
  return <CoursePage course={course} />;
}
