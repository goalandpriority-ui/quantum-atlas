import CoursePage from "@/components/CoursePage";
import { getCourseBySlug } from "@/lib/content/courses";
import { notFound } from "next/navigation";

export default function Page() {
  const course = getCourseBySlug("edx-quantum-computing-fundamentals");
  if (!course) return notFound();
  return <CoursePage course={course} />;
}
