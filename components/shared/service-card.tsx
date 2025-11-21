import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  return (
    <Card
      className="
        flex h-full flex-col
        rounded-4xl
        border border-border/60
        bg-card/95
        shadow-[0_28px_80px_rgba(0,0,0,0.55)]
      "
    >
      <CardContent className="flex flex-1 flex-col items-center px-10 pb-10 pt-12 text-center sm:px-12 sm:pt-14">
        <div className="relative mb-10 h-40 w-full max-w-[220px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-contain"
          />
        </div>

        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
