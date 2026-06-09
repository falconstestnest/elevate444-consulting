interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={`text-sm font-semibold uppercase tracking-widest ${
          light ? "text-brand-gold" : "text-brand-green dark:text-brand-gold"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-heading mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
