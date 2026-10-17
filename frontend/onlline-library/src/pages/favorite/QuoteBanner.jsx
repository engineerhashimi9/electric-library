import { Link } from "react-router-dom";
import { Quote, ArrowRight } from "lucide-react";

export default function QuoteBanner() {
  return (
    <section className="group relative overflow-hidden rounded-3xl bg-leaf-950 p-10 shadow-2xl shadow-leaf-950/20">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-leaf-500/20 blur-3xl transition duration-700 group-hover:scale-125" />
      <div className="pointer-events-none absolute -top-24 left-1/3 h-60 w-1/5 rounded-full bg-leaf-800 blur-2xl" />

      <div className="relative flex items-center justify-between">
        <div className="flex max-w-[768px] items-start gap-5">
          <Quote className="mt-1 h-5 w-6 shrink-0 fill-leaf-400 text-leaf-400" />
          <div>
            <blockquote className="pb-2 font-serif text-[40px] leading-[50px] tracking-[-1px] text-paper">
              “We think we tell stories, but stories often tell us.”
            </blockquote>
            <p className="flex items-center gap-2 text-[15px]">
              <cite className="not-italic text-leaf-100">— Italo Calvino</cite>
              <span className="h-1.5 w-1.5 rounded-full bg-leaf-400" />
              <span className="text-leaf-300/70">Marginalia Entry from Invisible Cities, Vol. II</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-leaf-200">SANCTUARY SYNC</p>
            <p className="text-[13px] leading-5 text-paper">3 Saved Marginalia<br />Excerpts</p>
          </div>
          <a
           
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[13px] text-leaf-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-leaf-50 active:scale-95"
          >
            View Highlights <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
