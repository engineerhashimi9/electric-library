import { Users, BellRing } from "lucide-react";
import Eyebrow from "@/component/ui/Eyebrow";

export default function AuthorsHeader({ total, followedCount }) {
  return (
    <section className="flex items-end justify-between gap-8">
      <div className="space-y-4">
        <Eyebrow>Scholarship Retrospectives • Canon of Authors</Eyebrow>
        <h1 className="font-serif text-[40px] font-medium leading-tight text-leaf-950">Master Authors &amp; Curators</h1>
        <p className="max-w-[560px] text-[16px] leading-relaxed text-ink-soft">
          Follow the voices behind the canon — from modernist pioneers to contemporary fabulists — and receive new
          folios and annotated editions as they join the archive.
        </p>
      </div>
      <div className="flex shrink-0 gap-3 pb-2">
        <span className="flex items-center gap-2 rounded-full bg-leaf-100 px-4 py-2 text-[12px] font-semibold text-leaf-950">
          <Users className="h-3.5 w-3.5" /> {total} Patrons Archived
        </span>
        <span className="flex items-center gap-2 rounded-full bg-leaf-900 px-4 py-2 text-[12px] font-semibold text-white">
          <BellRing className="h-3.5 w-3.5" /> Following {followedCount}
        </span>
      </div>
    </section>
  );
}
