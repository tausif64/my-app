import { ShieldCheck } from "lucide-react";

interface WhyPillarCardProps {
  title: string;
  description: string;
}

export function WhyPillarCard({ title, description }: WhyPillarCardProps) {
  return (
    <div
      className={"shrink-0 bg-background border-4 rounded-full sm:scale-[1]"}
    >
      <div
        className="
          flex aspect-square w-full max-w-[260px]
          flex-col items-center justify-center
          rounded-full border border-border/70
          bg-card/95
          px-10 text-center
          shadow-[0_18px_60px_rgba(0,0,0,0.65)]
        "
      >
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15">
          <ShieldCheck className="h-5 w-5 text-emerald-400" />
        </div>

        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
