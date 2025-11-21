import { ServiceCard } from "@/components/shared/service-card";

const services = [
  {
    title: "Predictive Analytics",
    description:
      "Forecast trends and make data-driven decisions with our advanced ML models.",
    imageSrc: "/images/services/predictive-analytics.png",
    imageAlt: "Predictive analytics 3D illustration",
  },
  {
    title: "AI Consulting",
    description:
      "Expert guidance on implementing AI solutions for your business needs.",
    imageSrc: "/images/services/ai-consulting.png",
    imageAlt: "AI consulting 3D illustration",
  },
  {
    title: "Data Engineering",
    description:
      "Build robust data pipelines and infrastructure for ML operations.",
    imageSrc: "/images/services/data-engineering.png",
    imageAlt: "Data engineering 3D illustration",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background py-16 sm:py-24 px-6"
    >
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 bg-dot text-muted-foreground/30" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 bg-dot text-muted-foreground/30" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center sm:mb-16">
          <h2 className="text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
            Our Ultimate Set of Services for Your
            <br className="hidden sm:block" />
            <span className="block">Ideas Implementation</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
