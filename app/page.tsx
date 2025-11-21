import { HeroSection } from "@/components/home/hero-section";
import { ClientLogosSection } from "@/components/home/client-logos-section";
import { ServicesSection } from "@/components/home/services-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { WhyWeStartedSection } from "@/components/home/why-we-started-section";
import { FaqSection } from "@/components/home/faq-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ClientLogosSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <WhyWeStartedSection />
      <FaqSection />
    </div>
  );
}
