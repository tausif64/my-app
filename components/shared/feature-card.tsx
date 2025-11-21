interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-full bg-card/80 px-6 py-6 text-center shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
        {/* Maybe a small icon or checkmark */}●
      </div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em]">
        {title}
      </h3>
      <p className="text-[11px] text-muted-foreground">{description}</p>
    </div>
  );
}
