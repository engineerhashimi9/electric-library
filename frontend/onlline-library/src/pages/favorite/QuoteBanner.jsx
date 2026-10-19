import { Link } from "react-router-dom";
import { Quote, ArrowRight, BookMarked, Highlighter } from "lucide-react";
// import { serif } from "../../styles/fonts";

export default function QuoteBanner() {
  return (
    <section className="group relative overflow-hidden rounded-3xl bg-[#07241a] p-5 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] md:p-10">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-[#fd9168]/20 blur-[32px] transition duration-700 group-hover:scale-125 lg:h-80 lg:w-80" />
      <div className="pointer-events-none absolute -top-24 left-1/3 hidden h-60 w-1/5 rounded-full bg-[#1e3a2f] blur-[20px] lg:block" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[768px] items-start gap-5">
          <Quote className="mt-1 hidden h-5 w-6 shrink-0 fill-[#fd9168] text-[#fd9168] lg:block" />
          <div>
            <p className="mb-3 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-[#fd9168] lg:hidden">
              <BookMarked className="h-4 w-4" /> Favorited Quotation
            </p>
            <blockquote
              className={`pb-4 text-[24px] italic leading-9 text-[#fbf9f6] sm:text-[30px] sm:leading-[42px] lg:pb-2 lg:text-[40px] lg:not-italic lg:leading-[50px] lg:tracking-[-1px] `}
            >
              “We think we tell stories, but stories often tell us.”
            </blockquote>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px]">
              <cite className="font-semibold not-italic text-[#fbf9f6] lg:font-normal lg:text-[#caeada]">
                <span className="hidden lg:inline">— </span>Italo Calvino
              </cite>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#fd9168] lg:block" />
              <span className="text-[#86a496]">
                <span className="lg:hidden">
                  From ‘Invisible Cities’ • Oct 14
                </span>
                <span className="hidden lg:inline">
                  Marginalia Entry from Invisible Cities, Vol. II
                </span>
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 lg:justify-end">
          <div className="hidden text-right lg:block">
            <p className="text-[11px] font-bold uppercase tracking-[0.55px] text-[#caeada]">
              SANCTUARY SYNC
            </p>
            <p className="text-[13px] leading-5 text-[#fbf9f6]">
              3 Saved Marginalia
              <br />
              Excerpts
            </p>
          </div>
          <a className="ml-auto flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-[14px] font-medium text-[#86a496] ring-1 ring-white/10 transition hover:bg-white/20 hover:text-white active:scale-95 lg:ml-0 lg:rounded-xl lg:bg-white lg:px-5 lg:py-3 lg:text-[13px] lg:font-normal lg:text-[#07241a] lg:shadow-lg lg:ring-0 lg:hover:-translate-y-0.5 lg:hover:bg-[#f5f3f0]">
            <Highlighter className="h-4 w-4 lg:hidden" />
            <span className="lg:hidden">3 highlights</span>
            <span className="hidden lg:inline">View Highlights</span>
            <ArrowRight className="hidden h-3 w-3 transition-transform group-hover:translate-x-0.5 lg:block" />
          </a>
        </div>
      </div>
    </section>
  );
}
