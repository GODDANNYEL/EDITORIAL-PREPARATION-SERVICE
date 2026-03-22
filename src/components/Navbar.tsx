import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import epsLogo from "@/assets/eps-logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 h-20 flex items-center bg-card/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex justify-between items-center w-full">
        <a href="#" className="flex items-center gap-2">
          <img src={epsLogo} alt="EPS Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("services")} className="text-foreground font-medium text-[0.95rem] hover:text-accent transition-colors">Services</button>
          <button onClick={() => scrollTo("process")} className="text-foreground font-medium text-[0.95rem] hover:text-accent transition-colors">Process</button>
          <button onClick={() => scrollTo("faq")} className="text-foreground font-medium text-[0.95rem] hover:text-accent transition-colors">FAQ</button>
          <Button variant="hero" size="lg" asChild>
            <a href="https://wa.me/+19713153818" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-20 left-0 right-0 bg-card border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-lg">
          <button onClick={() => scrollTo("services")} className="text-left text-foreground font-medium">Services</button>
          <button onClick={() => scrollTo("process")} className="text-left text-foreground font-medium">Process</button>
          <button onClick={() => scrollTo("faq")} className="text-left text-foreground font-medium">FAQ</button>
          <Button variant="hero" size="lg" asChild className="w-full">
            <a href="https://wa.me/+19713153818" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
