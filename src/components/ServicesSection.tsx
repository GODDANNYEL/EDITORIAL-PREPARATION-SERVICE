import { useReveal } from "@/hooks/useReveal";
import { FileText, BookOpen, LayoutList, CheckCircle, Check } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Journal Formatting",
    subtitle: "Aligned with Your Target Journal",
    desc: "We format your manuscript to match exact journal guidelines reducing the risk of immediate desk rejection.",
    includes: [
      "Layout & heading structure",
      "Figure & table formatting",
      "Submission file preparation",
      "Journal-specific compliance",
    ],
  },
  {
    icon: BookOpen,
    title: "Reference & Citation Formatting",
    subtitle: "Accurate, Consistent, and Compliant",
    desc: "All references are checked and formatted according to the required citation style for editorial compliance.",
    includes: [
      "Citation style alignment",
      "In-text reference accuracy",
      "Bibliography consistency",
      "Cross-reference verification",
    ],
  },
  {
    icon: LayoutList,
    title: "Manuscript Structure Optimization",
    subtitle: "Clear, Logical, and Reviewer-Friendly",
    desc: "We refine the organization of your paper to improve flow, clarity, and readability for editors and reviewers.",
    includes: [
      "Section flow & logic",
      "Argument clarity enhancement",
      "Abstract & conclusion polish",
      "Readability improvements",
    ],
  },
  {
    icon: CheckCircle,
    title: "Submission Readiness Check",
    subtitle: "Prepared for Editorial Screening",
    desc: "A final, detailed review to ensure your manuscript meets all submission requirements before it reaches the journal.",
    includes: [
      "Pre-submission checklist",
      "Guideline compliance audit",
      "Formatting final review",
      "Cover letter guidance",
    ],
  },
];

const ServicesSection = () => {
  const ref = useReveal();

  return (
    <section id="services" ref={ref} className="reveal-section section-padding bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-headline">What We Handle for You Before Submission</h2>
          <p className="section-subheadline mx-auto text-center">
            From formatting to final checks, we take care of the critical details that determine whether your manuscript moves forward or gets rejected.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background p-8 rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-1 text-foreground">{s.title}</h3>
              <p className="text-xs font-semibold text-primary mb-3">{s.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-5">{s.desc}</p>

              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">Services includes:</p>
                <ul className="space-y-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-muted-foreground font-medium">
          Every service is designed to reduce rejection risk and improve submission success.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
