"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const logos = [
  { name: "Zapier" },
  { name: "Spotify" },
  { name: "Zoom" },
  { name: "Slack" },
  { name: "Amazon" },
  { name: "Adobe" },
  { name: "Zapier" },
  { name: "Spotify" },
  { name: "Zoom" },
  { name: "Slack" },
  { name: "Amazon" },
  { name: "Adobe" },
];

export function ClientLogosSection() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 300,
      stopOnInteraction: false,
      stopOnMouseEnter: false, 
    })
  );

  return (
    <section className="border-y border-primary/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Carousel
          opts={{
            loop: true, // infinite scroll
            align: "start",
            dragFree: true, // makes smooth continuous movement
            duration: 7000
          }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {logos.map((logo, i) => (
              <CarouselItem
                key={i}
                className="basis-1/3 sm:basis-1/6 pl-8"
              >
                <div className="flex h-12 items-center justify-center">
                  <span className="text-sm font-semibold tracking-wide text-muted-foreground">
                    {logo.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
