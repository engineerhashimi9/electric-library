import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getLocalized } from "@/utils/langHelper";

export default function AuthorCard({ author }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="bg-[#FFFFFF] p-3 md:p-4 rounded-xl border border-[#D0E8E6] hover:border-[#17A296] text-center space-y-2 hover:-translate-y-1 hover:shadow-md transition-all">
      <img
        src={author.image}
        alt={getLocalized(author.name, lang)}
        className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover mx-auto border border-[#D0E8E6]"
      />
      <div className="flex flex-col gap-2">
        <h4 className="text-xs md:text-[16px] font-bold text-[#0A2E2C] truncate">
          {getLocalized(author.name, lang)}
        </h4>
        <p className="hidden md:block text-[10px] text-[#17A296] font-semibold">{getLocalized(author.title, lang)}</p>
        <p className="hidden md:block text-[14px] text-[#4A6B68] leading-relaxed">{getLocalized(author.description, lang)}</p>
        <p className="text-[10px] text-[#4A6B68] font-medium">{getLocalized(author.works, lang)}</p>
        <Link to="/author" className="hidden md:flex items-center justify-center gap-2 text-[#0E6760] hover:text-[#17A296] cursor-pointer text-xs font-bold transition-colors">
          <p>{t("authors.featured.explore")}</p>
          <img className="w-3 h-3 rtl:rotate-180" src="./arrow.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
