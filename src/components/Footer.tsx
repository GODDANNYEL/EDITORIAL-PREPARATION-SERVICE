const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-20 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 mb-16">
          <div>
            <a href="#" className="font-extrabold text-xl text-primary">Editorial Preparation Service</a>
            <p className="text-sm text-muted-foreground mt-4">
              Supporting researchers in manuscript preparation and journal submission worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollTo("submit")} className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</button>
              <button onClick={() => scrollTo("services")} className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors">Services</button>
              <button onClick={() => scrollTo("process")} className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors">Process</button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="mt-0">
              <p className="text-sm font-medium">Call: +1 971-315-3818</p>
              <p className="text-sm text-muted-foreground mt-2">Response Time: 12–24 hours</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-10 text-center text-sm text-muted-foreground">
          © 2026 Editorial Preparation Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
