import Link from "next/link";
import { Course } from "@/lib/content/courses-new";

const levelStyles: Record<string, string> = {
  beginner: "text-quantum bg-quantum-50",
  intermediate: "text-collapse bg-collapse-50",
  advanced: "text-ink bg-paper border border-line",
};

const costStyles: Record<string, string> = {
  free: "text-quantum bg-quantum-50",
  freemium: "text-ink-muted bg-paper border border-line",
  paid: "text-collapse bg-collapse-50",
};

export default function CoursePage({ course }: { course: Course }) {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Course
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-3">
        {course.title}
      </h1>
      <p className="text-lg text-quantum font-medium mb-6">{course.provider}</p>

      <div className="flex gap-2 mb-8 flex-wrap">
        <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-3 py-1 ${levelStyles[course.level]}`}>
          {course.level}
        </span>
        <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-3 py-1 ${costStyles[course.cost]}`}>
          {course.cost}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wide rounded-full px-3 py-1 text-ink-muted bg-paper border border-line">
          {course.providerType}
        </span>
      </div>

      <div className="prose-quantum max-w-2xl">
        <p>{course.description}</p>

        <h2>What you'll learn</h2>
        <ul>
          {course.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>

        <h2>Format</h2>
        <p>{course.format}</p>

        <h2>Prerequisites</h2>
        <p>{course.prerequisites}</p>
      </div>

      <div className="mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
          Ready to start?
        </p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">
          This course is hosted by {course.provider}
        </h2>
        <p className="text-sm text-ink-muted mb-5">
          QuantumAtlas curates and summarizes courses but doesn't host them
          directly. Click below to go to {course.provider}'s official page
          and enroll.
        </p>
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-quantum text-white px-6 py-3 text-sm font-semibold hover:bg-quantum-700 transition-colors"
        >
          Go to {course.provider} →
        </a>
      </div>

      <div className="mt-8 max-w-2xl">
        <Link href="/courses" className="text-quantum hover:underline text-sm">
          ← Back to all courses
        </Link>
      </div>
    </article>
  );
}
