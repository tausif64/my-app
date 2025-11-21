import { SectionHeader } from "./section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "01",
    question: "What services does Catalyst Analytics provide?",
    answer:
      "We offer predictive analytics, AI consulting, data engineering, and more to help you unlock the value of your data.",
  },
  {
    id: "02",
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
  },
  {
    id: "03",
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
  },
  {
    id: "04",
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
  },
  {
    id: "05",
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Find quick answers to common questions about our services and approach."
        />

        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-3"
          defaultValue="01"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="overflow-hidden rounded-2xl border border-border/60 bg-card/80 px-4"
            >
              <AccordionTrigger className="text-left font-medium">
                <div className="flex items-center gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold">
                    {faq.id}
                  </span>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-11 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
