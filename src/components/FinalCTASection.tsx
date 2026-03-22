import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

const FinalCTASection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal-section section-padding bg-muted text-center">
      <div className="container">
        <h2 className="section-headline">Ready to Submit Your Manuscript with Confidence?</h2>
        <p className="section-subheadline mx-auto text-center">
          Take the next step toward publication. Let our editorial experts refine, format, and prepare your manuscript to meet journal standards so you can submit with clarity and confidence.
        </p>
        <Button variant="hero" size="lg" onClick={() => document.getElementById("submit")?.scrollIntoView({ behavior: "smooth" })}>
          Start Your Submission Process
        </Button>
        <p className="text-sm text-muted-foreground mt-6">
          Free evaluation • No obligation • Response within 12–24 hours
        </p>
        <p className="text-xs text-muted-foreground mt-3 italic">
          Join researchers who are preparing their manuscripts for successful submission.
        </p>
      </div>
    </section>);

};

export default FinalCTASection;