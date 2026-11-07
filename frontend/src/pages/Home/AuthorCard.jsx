import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getLocalized } from "@/utils/langHelper";

export default function AuthorCard({ author }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const name = getLocalized(author.name, lang);
  const title = getLocalized(author.title, lang);
  const description = getLocalized(author.description, lang);
  const works = getLocalized(author.works, lang);

  return (
    <article className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#D0E8E6] text-center space-y-3 hover:-translate-y-1 hover:border-[#17A296] hover:shadow-library-hover transition-all duration-300 flex flex-col items-center">
      <div className="overflow-hidden rounded-full ring-4 ring-[#E6F4F3] transition-all duration-300 group-hover:ring-[#17A296] shrink-0">
        <img
          src={author.image}
          alt={name}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
        />
      </div>

      <div className="flex flex-col gap-1.5 w-full flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-extrabold text-[#0A2E2C] truncate">
          {name}
        </h3>
        <p className="text-xs text-[#17A296] font-bold line-clamp-1">{title}</p>
        <p className="hidden md:line-clamp-2 text-xs text-[#4A6B68] leading-relaxed pt-1">
          {description}
        </p>
        <p className="text-xs text-[#4A6B68] font-semibold mt-auto pt-2">{works}</p>

        <Link
          to="/author"
          className="hidden md:inline-flex items-center justify-center gap-1.5 text-[#0E6760] hover:text-[#17A296] text-xs font-bold transition-colors pt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded-lg"
        >
          <span>{t("authors.featured.explore")}</span>
          <ArrowRight size={14} className="rtl:rotate-180" />
        </Link>
      </div>
    </article>
  );
}
