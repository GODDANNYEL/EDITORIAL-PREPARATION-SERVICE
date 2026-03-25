import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: "42,583+", title: "Published Articles", desc: "Successfully guided from submission to journal acceptance." },
  { value: "500,000+", title: "Manuscripts Reviewed", desc: "Prepared, Formatted, and aligned with journal requirements." },
  { value: "1M+", title: "Documents Written and Edited", desc: "Refined for clarity, Precision, and academic excellence." },
  { value: "11+ Years", title: "Editorial Experience", desc: "Supporting researchers across disciplines and journals." },
];

const TrustSection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal-section section-padding bg-muted text-center">
      <div className="container">
        <span className="section-label">Trusted by Researchers Worldwide</span>
        <h2 className="section-headline">A Proven Record in Academic Publishing Support</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {stats.map((s) => (
            <div key={s.title}>
              <h3 className="text-4xl font-bold text-accent mb-2">{s.value}</h3>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">{s.title}</strong><br />{s.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-muted-foreground italic">
          From first draft to final decision. We improve every stage of the submission process.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
