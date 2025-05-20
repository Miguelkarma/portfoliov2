"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center relative">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dev to-dev2 inline-block font-display">
        {title}
      </h2>
      <p className="mt-1 text-muted">My completed courses and qualifications</p>
      {subtitle && (
        <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
