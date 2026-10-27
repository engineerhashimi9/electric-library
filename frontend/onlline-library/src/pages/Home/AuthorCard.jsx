import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getLocalized } from "@/utils/langHelper";

export default function AuthorCard({ author }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="bg-[#FFFFFF] p-3 md:p-4 rounded-xl border border-[#E2EFEA] hover:border-[#10B981] text-center space-y-2 hover:-translate-y-1 hover:shadow-md transition-all">
      <img
        src={author.image}
        alt={getLocalized(author.name, lang)}
        className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover mx-auto border border-[#DDECE6]"
      />
      <div className="flex flex-col gap-2">
        <h4 className="text-xs md:text-[16px] font-bold text-[#111C18] truncate">
          {getLocalized(author.name, lang)}
        </h4>
        <p className="hidden md:block text-[10px] text-[#10B981] font-semibold">{getLocalized(author.title, lang)}</p>
        <p className="hidden md:block text-[14px] text-[#52665E] leading-relaxed">{getLocalized(author.description, lang)}</p>
        <p className="text-[10px] text-[#52665E] font-medium">{getLocalized(author.works, lang)}</p>
        <Link to="/author" className="hidden md:flex items-center justify-center gap-2 text-[#09261C] hover:text-[#10B981] cursor-pointer text-xs font-bold transition-colors">
          <p>{t("authors.featured.explore")}</p>
          <img className="w-3 h-3 rtl:rotate-180" src="./arrow.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
