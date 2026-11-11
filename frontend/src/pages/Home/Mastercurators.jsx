import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AuthorCard from "./AuthorCard";
import Eyebrow from "@/component/ui/Eyebrow";

export default function MasterCurators({ authors }) {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="curators-heading" className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1">
          <Eyebrow>{t("home.curators.eyebrow")}</Eyebrow>
          <h2 id="curators-heading" className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0E6760] tracking-tight">
            {t("home.curators.title")}
          </h2>
          <p className="text-xs sm:text-sm text-[#4A6B68] font-medium">
            {t("home.curators.subtitle")}
          </p>
        </div>
        <Link
          to="/author"
          className="text-xs sm:text-sm font-bold text-[#0E6760] hover:text-[#17A296] hover:underline underline-offset-4 transition-colors shrink-0 self-start sm:self-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded"
        >
          {t("home.curators.viewAll")}
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {authors.map((author, idx) => (
          <AuthorCard key={idx} author={author} />
        ))}
      </div>
    </section>
  );
}
