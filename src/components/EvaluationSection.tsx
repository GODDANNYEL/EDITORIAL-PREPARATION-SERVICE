import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

const researchFields = [
  "Biological Sciences",
  "Biomedical & Clinical Sciences",
  "Business & Management",
  "Chemistry",
  "Computer Science & IT",
  "Earth & Environmental Sciences",
  "Economics & Finance",
  "Education",
  "Engineering — Chemical",
  "Engineering — Civil & Structural",
  "Engineering — Electrical & Electronic",
  "Engineering — Mechanical",
  "History & Archaeology",
  "Law & Legal Studies",
  "Linguistics & Languages",
  "Materials Science",
  "Mathematics & Statistics",
  "Medicine & Health Sciences",
  "Nursing & Allied Health",
  "Pharmaceutical Sciences",
  "Philosophy & Ethics",
  "Physics & Astronomy",
  "Political Science & International Relations",
  "Psychology",
  "Public Health & Epidemiology",
  "Social Sciences & Sociology",
  "Veterinary Sciences",
  "Other",
];

const EvaluationSection = () => {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="submit" ref={ref} className="reveal-section section-padding bg-primary">
      <div className="container">
        <div className="text-center">
          <span className="section-label !text-primary-foreground/60">Join thousands of researchers</span>
          <h2 className="section-headline text-primary-foreground">Get a Free Expert Evaluation of Your Manuscript</h2>
          <p className="section-subheadline mx-auto text-center !text-primary-foreground/70">
            Our editorial experts will review your manuscript, check formatting, and provide detailed feedback so you know exactly how to submit with confidence.
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 md:p-12 max-w-3xl mx-auto mt-12 text-foreground">
          {submitted ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-3">Thank You!</h3>
              <p className="text-muted-foreground">Your manuscript will be reviewed by experienced editors within 12–24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Full Name</label>
                <input type="text" placeholder="Dr. Jane Doe" className="px-3 py-3 border border-border rounded-md text-sm bg-background" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Email Address</label>
                <input type="email" placeholder="jane.doe@university.edu" className="px-3 py-3 border border-border rounded-md text-sm bg-background" required />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold">Research Field / Discipline</label>
                <select className="px-3 py-3 border border-border rounded-md text-sm bg-background text-foreground" required defaultValue="">
                  <option value="" disabled>Select your research field</option>
                  {researchFields.map((field) => (
                    <option key={field} value={field}>{field}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold">Upload Manuscript</label>
                <input type="file" className="px-3 py-3 border border-border rounded-md text-sm bg-background" />
                <p className="text-xs text-muted-foreground">Accepted formats: DOC, DOCX, PDF | Max size: 50MB</p>
              </div>
              <div className="md:col-span-2">
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  Request Free Expert Review
                </Button>
              </div>
            </form>
          )}

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Your manuscript is handled with complete confidentiality and professional care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluationSection;
