import { useReveal } from "@/hooks/useReveal";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

import journalCIE from "@/assets/journal-cie.gif";
import journalLancet from "@/assets/journal-lancet.gif";
import journalSage from "@/assets/journal-sage.jpg";
import journalNature from "@/assets/journal-nature.png";

const articles = [
  {
    title: "Energy-aware operations management for flow shops under TOU electricity tariff",
    authors: "Weiwei Cui, Biao Lu",
    publisher: "Elsevier",
    journal: "Computers & Industrial Engineering",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0360835220306215",
    logo: journalCIE,
    color: "hsl(24, 95%, 53%)",
  },
  {
    title: "Acute poisoning in the Gaza Strip: a retrospective study",
    authors: "Mohammed K El-Habil MSc",
    publisher: "Elsevier",
    journal: "The Lancet",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0140673618303957",
    logo: journalLancet,
    color: "hsl(0, 72%, 45%)",
  },
  {
    title: "The Evolution of the British Society of Physical and Rehabilitation Medicine",
    authors: "Manoj Sivan, Javvad Haider",
    publisher: "SAGE",
    journal: "Advances in Rehabilitation Science and Practice",
    link: "https://journals.sagepub.com/doi/full/10.1177/27536351251392199",
    logo: journalSage,
    color: "hsl(210, 70%, 40%)",
  },
  {
    title: "Offline: Rosa Luxemburg and the struggle for health",
    authors: "Richard Horton",
    publisher: "Elsevier",
    journal: "The Lancet",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0140673619300509",
    logo: journalLancet,
    color: "hsl(0, 72%, 45%)",
  },
  {
    title: "The two faces of pancreas tissue-resident macrophages",
    authors: "Miriam Saffern & Miriam Merad",
    publisher: "Nature",
    journal: "Nature Reviews Immunology",
    link: "https://www.nature.com/articles/s41577-022-00728-x",
    logo: journalNature,
    color: "hsl(0, 0%, 20%)",
  },
];

const PublishedArticlesSection = () => {
  const ref = useReveal();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const snapCount = emblaApi?.scrollSnapList().length ?? 1;

  return (
    <section ref={ref} className="reveal-section section-padding bg-muted/40">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="section-headline">Some of Our Successfully Published Articles</h2>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors duration-200 active:scale-95"
            aria-label="Previous articles"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors duration-200 active:scale-95"
            aria-label="Next articles"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden mx-4 md:mx-0">
            <div className="flex gap-6">
              {articles.map((article, i) => (
                <a
                  key={i}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] min-w-0 group"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {/* Journal cover image */}
                    <div className="w-full h-48 bg-muted/50 overflow-hidden">
                      <img
                        src={article.logo}
                        alt={`${article.journal} cover`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      {/* Publisher & badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">{article.publisher}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                          Published
                        </span>
                      </div>

                      {/* Journal name */}
                      <p className="text-xs font-semibold text-primary/70 mb-2 uppercase tracking-wide">
                        {article.journal}
                      </p>

                      {/* Paper title */}
                      <h3 className="text-base font-bold text-foreground mb-3 leading-snug line-clamp-3 group-hover:text-primary transition-colors duration-200">
                        {article.title}
                      </h3>

                      {/* Authors */}
                      <p className="text-sm text-muted-foreground mb-5 flex-1">
                        {article.authors}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                        <span>View Publication</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: snapCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "bg-primary w-6"
                    : "bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishedArticlesSection;
