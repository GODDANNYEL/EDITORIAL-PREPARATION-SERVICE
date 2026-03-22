import { useReveal } from "@/hooks/useReveal";
import researcherImage from "@/assets/researcher-image.png";
import researcherImage2 from "@/assets/researcher-image-2.png";

const problems = [
  { title: "Incorrect journal formatting", desc: "Manuscripts not aligned with specific journal templates are often rejected outright." },
  { title: "Weak or inconsistent structure", desc: "Poor organization makes it difficult for editors and reviewers to follow your work." },
  { title: "Citation and reference errors", desc: "Inconsistent formatting or missing references reduce credibility." },
  { title: "Failure to meet submission guidelines", desc: "Each journal has strict requirements that must be followed precisely." },
  { title: "Language and clarity issues", desc: "Even strong research can be overlooked if it isn't clearly communicated." },
];

const ProblemSection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal-section section-padding bg-card">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-headline">It's Not Your Research, It's the Submission Process</h2>
            <p className="mb-6 text-foreground">
              Many high-quality manuscripts never make it to peer review not because the research lacks value, but because they fail to meet strict journal requirements.
            </p>
            <p className="text-muted-foreground mb-4">
              From formatting errors to unclear structure, small technical issues can lead to immediate rejection before your work is even evaluated.
            </p>
            <p className="text-muted-foreground">
              For many researchers, navigating these requirements is time-consuming, unclear, and frustrating especially when every journal has different standards.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Common Reasons for Early Rejection</h4>
            {problems.map((p) => (
              <div key={p.title} className="flex gap-4 p-5 rounded-lg bg-muted">
                <div className="w-3 h-3 mt-1.5 rounded-full bg-accent flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner with Image */}
        <div className="mt-16 rounded-xl overflow-hidden" style={{ backgroundColor: '#00176A' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center">
            <div className="p-10 lg:p-14">
              <h2 className="text-2xl md:text-3xl text-white font-bold mb-3 leading-snug">
                Presentation is the difference between rejection and acceptance.
              </h2>
              <p className="text-white/60 mb-6">
                A large percentage of submissions are rejected before peer review due to technical and formatting issues.
              </p>
              <a
                href="#submit"
                onClick={(e) => { e.preventDefault(); document.getElementById('submit')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-white font-semibold px-6 py-3 rounded-md text-sm hover:bg-white/90 transition-colors"
                style={{ color: '#00176A' }}
              >
                Get Your Manuscript Reviewed Free →
              </a>
            </div>
            <div className="hidden lg:flex items-end justify-center px-6">
              <img
                src={researcherImage2}
                alt="Academic researcher with journal publications"
                className="max-h-[280px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
