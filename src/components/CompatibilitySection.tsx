import { useReveal } from "@/hooks/useReveal";

const universities = [
  { name: "TU Wien", style: "font-bold text-red-700" },
  { name: "Universität Zürich", style: "font-semibold text-slate-700" },
  { name: "Universidad Nacional", style: "font-bold text-yellow-700" },
  { name: "Sapienza", style: "font-semibold text-red-800" },
  { name: "Sorbonne Université", style: "font-bold text-blue-900" },
  { name: "Universitas Indonesia", style: "font-semibold text-yellow-600" },
  { name: "Chulalongkorn", style: "font-bold text-pink-700" },
  { name: "Tecnológico de Monterrey", style: "font-semibold text-blue-800" },
  { name: "Korea University", style: "font-bold text-red-800" },
  { name: "Yonsei University", style: "font-semibold text-blue-700" },
  { name: "Nagoya University", style: "font-bold text-green-800" },
  { name: "University of Maryland", style: "font-semibold text-red-700" },
];

const publishers = [
  { name: "ELSEVIER", style: "font-bold text-orange-600 tracking-wider" },
  { name: "OXFORD University Press", style: "font-semibold text-blue-900" },
  { name: "IEEE", style: "font-bold text-blue-700 tracking-wide" },
  { name: "ACS", style: "font-bold text-blue-800" },
  { name: "Royal Society of Chemistry", style: "font-semibold text-amber-700" },
  { name: "AIP Publishing", style: "font-bold text-blue-600" },
  { name: "Karger", style: "font-semibold text-blue-900" },
  { name: "Thieme", style: "font-bold text-blue-700" },
  { name: "Frontiers", style: "font-bold text-slate-700" },
  { name: "Wiley", style: "font-bold text-black" },
  { name: "SAGE Publications", style: "font-semibold text-green-700" },
  { name: "COPE", style: "font-bold text-blue-600 tracking-wider" },
];

const CompatibilitySection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal-section section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="section-headline">
            Recommended by Leading Publishers,<br />
            Universities, and Research Institutes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
            600+ top international journals and 500+ universities trust our editorial preparation services to help their authors meet publication standards.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 rounded-2xl bg-white/80 backdrop-blur-sm shadow-[0_2px_24px_rgba(0,0,0,0.06)] border border-slate-100 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Universities Column */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6 text-center">Universities</h3>
              <div className="grid grid-cols-2 gap-4">
                {universities.map((uni) => (
                  <div
                    key={uni.name}
                    className="flex items-center justify-center px-3 py-3 rounded-lg bg-slate-50/80 hover:bg-slate-100 transition-colors duration-200"
                  >
                    <span className={`text-xs text-center leading-tight ${uni.style}`}>{uni.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-slate-200" style={{ display: 'none' }} />

            {/* Publishers Column */}
            <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
              <h3 className="text-lg font-bold text-foreground mb-6 text-center">Publishers</h3>
              <div className="grid grid-cols-2 gap-4">
                {publishers.map((pub) => (
                  <div
                    key={pub.name}
                    className="flex items-center justify-center px-3 py-3 rounded-lg bg-slate-50/80 hover:bg-slate-100 transition-colors duration-200"
                  >
                    <span className={`text-xs text-center leading-tight ${pub.style}`}>{pub.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;
