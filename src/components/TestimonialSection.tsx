import { useReveal } from "@/hooks/useReveal";
import { User } from "lucide-react";

const testimonials = [
  {
    headline: "My manuscript was accepted with only minor revisions!",
    quote: "After including the editorial improvements, my manuscript was accepted with only minor revisions. The structure and formatting were clearly in line with the journal's expectations, which made a significant difference.",
    author: "Dr. Spencer E.T. Hahn",
    role: "Professor",
    service: "Journal Formatting",
  },
  {
    headline: "Accepted Faster Than I Expected",
    quote: "After multiple rejections, EPS experts refined my manuscript's clarity, and academic tone. They resubmitted to a Q2 journal and it was accepted with only minor revisions. Reviewers even praised the presentation. This was my fastest acceptance yet.",
    author: "Fahod Savahrov",
    role: "PhD Researcher",
    service: "Journal Formatting and Submission",
  },
  {
    headline: "I finally got past the editorial screening stage",
    quote: "I had struggled with multiple rejections before, mainly due to formatting and structure issues. After working with this team, my manuscript was not only clearer but aligned perfectly with the journal's requirements. The difference was immediate.",
    author: "M. Okonkwo",
    role: "PhD Researcher",
    service: "Submission Readiness Check",
  },
  {
    headline: "This service bridges the gap most researchers miss",
    quote: "Many submissions fail at the technical level before review. Services like this help bridge that gap by ensuring manuscripts meet basic editorial expectations before submission.",
    author: "Prof. K. Tanaka",
    role: "Journal Editorial Board Member",
    service: "Reference & Citation Formatting",
  },
  {
    headline: "I recommended this to all my graduate students",
    quote: "I recommended this service to several of my graduates and postgraduate researchers. The improvement in manuscript quality and compliance with journal guidelines was clearly noticeable.",
    author: "Dr. S. Petrov",
    role: "Head of Department",
    service: "Journal Formatting",
  },
  {
    headline: "It removed a lot of stress before submission",
    quote: "The entire process felt structured and professional. I particularly appreciated how they handled the formatting and final checks. It removed a lot of stress before submission.",
    author: "Dr. F. Adeyemi",
    role: "Associate Professor",
    service: "Submission Readiness Check",
  },
];

const TestimonialSection = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="reveal-section section-padding bg-muted">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="section-headline">What Researchers Say About Our Editorial Support</h2>
          <p className="section-subheadline mx-auto text-center">
            Real experiences from researchers who improved their manuscripts and successfully navigated the submission process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-7 flex flex-col justify-between shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 border-l-4 border-primary"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">{t.headline}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-foreground">{t.author}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Service Used</span>
                  <span className="block text-xs font-bold text-primary">{t.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Supporting researchers across disciplines, institutions, and publication stages.
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
