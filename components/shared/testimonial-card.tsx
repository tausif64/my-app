import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        `
        relative flex h-64 flex-col justify-between
        rounded-2xl border border-border/60
        bg-card/95
        px-8 py-8
        text-foreground
        shadow-[0_18px_60px_rgba(0,0,0,0.55)]
      `,
        className
      )}
    >
      {/* Top Quotes Line */}
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-1/3 bg-white/15" />
        <Quote className="h-6 w-6 text-primary" />
        <span className="h-px w-1/3 bg-white/15" />
      </div>

      {/* Quote Text */}
      <p className="mt-6 line-clamp-5 text-sm leading-relaxed text-muted-foreground">
        {quote}
      </p>

      {/* User Info */}
      <div className="mt-6">
        <p className="text-sm font-semibold text-primary">{name}</p>
        <p className="text-[11px] text-primary/70">{role}</p>
      </div>
    </div>
  );
}
