import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.webp";

const stats = [
  { value: "42,583+", label: "Articles Published" },
  { value: "500,000+", label: "Manuscripts Reviewed" },
  { value: "1M+", label: "Documents Edited" },
  { value: "11+ Years", label: "Editorial Experience" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="pt-24 pb-16 md:pt-32 md:pb-20" style={{ backgroundColor: '#00176A' }}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 text-left">
            <span className="uppercase text-xs font-bold tracking-[0.1em] text-blue-300 mb-3 block">
              Expert Editorial Preparation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[-0.03em] mb-6 max-w-2xl text-balance text-white">
              Get Your Manuscript Accepted Faster Without Rejection and Less Review Time
            </h1>
            <p className="text-lg text-blue-100/80 max-w-xl mb-10">
              Stop wasting time on rejections. We refine your manuscript, fix critical issues, and position your work for faster acceptance by top journals.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-white hover:bg-white/90 shadow-md hover:-translate-y-px hover:shadow-lg font-semibold" style={{ color: '#00176A' }}
                size="lg"
                onClick={() => scrollTo("submit")}
              >
                Start Your Submission Process
              </Button>
              <Button
                className="bg-transparent text-white border border-white/30 hover:bg-white/10 font-semibold"
                size="lg"
                asChild
              >
                <a href="https://wa.me/+19713153818" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-blue-200/70">
              Initial Evaluation Delivered Within 12–24 Hours
            </p>
          </div>

          {/* Right: Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Academic editorial services overview showing journal search, manuscript editing, writing, submission, and research promotion"
              className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl rounded-lg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 border-t border-white/10 pt-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="block font-bold text-2xl text-white tabular-nums">{s.value}</span>
              <p className="text-sm text-blue-200/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
