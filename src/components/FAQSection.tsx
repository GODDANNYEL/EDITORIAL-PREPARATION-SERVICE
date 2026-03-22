import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  { q: "Do you guarantee publication?", a: "No. We do not guarantee publication, as final decisions are made by journal editors and peer reviewers. However, we significantly improve your manuscript's quality, structure, and compliance with journal requirements — helping reduce the risk of rejection by 60–90%." },
  { q: "Do you accept Co-authorship?", a: "Yes. We accept Co-authorship in all fields of study." },
  { q: "How long does manuscript preparation take?", a: "Turnaround time depends on the length and complexity of your manuscript. Most evaluations are completed within 12–24 hours, while full editorial preparation typically takes a few days. You will receive a clear timeline after initial review." },
  { q: "Do you support all academic disciplines?", a: "Yes. We support a wide range of academic fields, including sciences, engineering, social sciences, and humanities. Our editorial approach is tailored to meet discipline-specific journal standards." },
  { q: "What exactly is included in the free evaluation?", a: "The free evaluation includes an initial review of your manuscript's structure, formatting, and overall readiness for submission. We highlight key areas that may need improvement before journal submission." },
  { q: "Will my manuscript remain confidential?", a: "Yes. Your manuscript is handled with strict confidentiality and is only accessed by our editorial team for the purpose of review and preparation." },
  { q: "Do you format according to specific journals?", a: "Yes. We prepare manuscripts based on the exact guidelines of your target journal, including formatting, references, and submission requirements." },
  { q: "Can you help if my manuscript was previously rejected?", a: "Yes. Many researchers come to us after rejection. We identify the issues that may have affected the initial submission and help improve the manuscript for re-submission." },
];

const FAQSection = () => {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="reveal-section section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-headline">Common Questions About Our Editorial Service</h2>
          <p className="section-subheadline mx-auto text-center">
            Clear answers to help you understand our process, timelines, and what to expect.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border py-6 cursor-pointer" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-foreground pr-4">{faq.q}</h4>
                <span className="text-2xl text-accent flex-shrink-0">{openIndex === i ? "−" : "+"}</span>
              </div>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === i ? "200px" : "0", marginTop: openIndex === i ? "16px" : "0" }}
              >
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Still have questions? Our team is available to assist you before submission.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
