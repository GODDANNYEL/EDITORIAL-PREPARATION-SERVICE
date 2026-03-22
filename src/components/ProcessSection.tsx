import { useReveal } from "@/hooks/useReveal";
import { Upload, Settings, Eye, Rocket } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: Upload,
    title: "Submit Your Manuscript",
    subtitle: "Start with a Simple Submission",
    desc: "Upload your manuscript and share your field of study or target journal (if available). Our team begins with an initial evaluation of your document.",
    time: "Within hours",
  },
  {
    num: 2,
    icon: Settings,
    title: "Editorial Preparation & Formatting",
    subtitle: "Aligned with Journal Requirements",
    desc: "We format your manuscript according to your selected journal's guidelines, ensuring structure, layout, and technical elements meet editorial standards.",
    time: "1–3 Days",
  },
  {
    num: 3,
    icon: Eye,
    title: "Quality & Structure Review",
    subtitle: "Clarity, Flow, and Academic Precision",
    desc: "Your manuscript is reviewed for organization, consistency, and readability so it communicates your research effectively to editors and reviewers.",
    time: "1–3 Days",
  },
  {
    num: 4,
    icon: Rocket,
    title: "Ready for Journal Submission",
    subtitle: "Prepared for Editorial Screening",
    desc: "You receive a fully prepared manuscript that meets submission requirements and is ready to be submitted with confidence.",
    time: "Final Delivery",
  },
];

const ProcessSection = () => {
  const ref = useReveal();

  return (
    <section id="process" ref={ref} className="reveal-section section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-headline">Our Proven Editorial Preparation Process</h2>
          <p className="section-subheadline mx-auto text-center">
            A structured, step-by-step approach designed to prepare your manuscript for successful journal submission without confusion or guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative bg-card rounded-xl p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 flex flex-col"
            >
              <span className="absolute top-4 right-5 text-5xl font-black text-primary/[0.07] leading-none select-none">
                {s.num}
              </span>

              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>

              <h3 className="text-lg font-bold mb-1 text-foreground">{s.title}</h3>
              <p className="text-xs font-semibold text-primary mb-3">{s.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{s.desc}</p>

              <div className="mt-auto pt-4 border-t border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-primary/80">
                  ⏱ {s.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-medium mt-12">
          Each step is handled by experienced editorial professionals to ensure your manuscript meets journal expectations.
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
