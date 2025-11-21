"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/home/section-header";
// import { ArrowLeft, ArrowRight } from "lucide-react";
import { TestimonialCard } from "@/components/shared/testimonial-card";

export const testimonials = [
  {
    id: 1,
    quote:
      "We saw businesses drowning in data but struggling to make sense of it. Decisions were slow, teams were overwhelmed, and insights were buried.",
    name: "John Doe",
    role: "Founder & CEO",
  },
  {
    id: 2,
    quote:
      "We knew there had to be a better way — a smarter, faster, more intuitive solution to turn raw information into real-time decisions.",
    name: "John Doe",
    role: "Founder & CEO",
  },
  {
    id: 3,
    quote:
      "So we built a platform that empowers organizations to transform data into clear, confident action — every single day.",
    name: "John Doe",
    role: "Founder & CEO",
  },
  {
    id: 4,
    quote:
      "Their analytics engine helped us reduce manual reporting by over 70% — we now focus on strategy instead of spreadsheet chaos.",
    name: "Sarah Thompson",
    role: "VP of Data Strategy, FinTech Co.",
  },
  {
    id: 5,
    quote:
      "The AI models they deployed gave us insights we didn't know were even measurable. Game-changer for product planning.",
    name: "Michael Carter",
    role: "Head of Product, SaaS Corp",
  },
  {
    id: 6,
    quote:
      "We partnered with them during our scaling phase. Their data pipelines handled millions of events seamlessly.",
    name: "Aisha Malik",
    role: "CTO, E-Commerce Startup",
  },
  {
    id: 7,
    quote:
      "Their engineering team delivered ahead of schedule and exceeded expectations in terms of performance benchmarks.",
    name: "Daniel Kim",
    role: "Senior Engineering Manager, Cloud Systems",
  },
  {
    id: 8,
    quote:
      "We finally have a unified dashboard that pulls insights across departments. Alignment and decision speed improved drastically.",
    name: "Emily Rodriguez",
    role: "Operations Director, Logistics Group",
  },
  {
    id: 9,
    quote:
      "Their commitment to transparency and ethical AI practices gave us full confidence in deploying models enterprise-wide.",
    name: "Priya Shah",
    role: "Chief Compliance Officer, Banking Firm",
  },
];


export function WhyWeStartedSection() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 ">
        <SectionHeader title="Why We Started" />

        <div className="relative mt-12 mask-fade-x">
          <Carousel
            opts={{ loop: true, align: "center", duration: 5500 }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            {/* 👇 mask here for edge fade */}
            <CarouselContent className="-ml-6">
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.id}
                  className="pl-6 sm:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard
                    quote={t.quote}
                    name={t.name}
                    role={t.role}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* arrows stay inside Carousel, just positioned absolutely */}
            {/* <CarouselPrevious className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 rounded-full border-none bg-black text-primary shadow-md hover:bg-black/90 sm:flex">
              <ArrowLeft className="h-4 w-4" />
            </CarouselPrevious>

            <CarouselNext className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 rounded-full border-none bg-black text-primary shadow-md hover:bg-black/90 sm:flex">
              <ArrowRight className="h-4 w-4" />
            </CarouselNext> */}
          </Carousel>
        </div>

        <div className="mt-10 flex justify-center">
          <Button className="rounded-full px-8 text-sm font-semibold">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
