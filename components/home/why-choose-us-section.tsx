// components/home/why-choose-us-section.tsx
import { whyChooseUs } from "@/lib/data/home";
import { WhyPillarCard } from "@/components/shared/why-pillar-card";

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
            Why Choose Us
          </h2>
        </div>

        {/* circles */}
        <div
          className="
            flex flex-col items-center gap-6
            sm:flex-row sm:justify-center
            sm:gap-0 sm:-space-x-10
          "
        >
          {whyChooseUs.map((item,) => (
            <WhyPillarCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
