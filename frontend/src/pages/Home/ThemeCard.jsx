import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getLocalized } from "@/utils/langHelper";

export default function ThemeCard({ theme }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const name = getLocalized(theme.name, lang);
  const works = getLocalized(theme.works, lang);

  return (
    <Link
      to="/explorebooks"
      className="flex flex-col justify-center items-center gap-3 rounded-2xl p-4 bg-[#FFFFFF] border border-[#D0E8E6] hover:border-[#17A296] hover:bg-[#E6F4F3]/60 w-full min-h-[148px] transition-all duration-300 hover:-translate-y-1 shadow-library-sm hover:shadow-library focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] group text-center"
    >
      <div className="flex justify-center items-center rounded-xl bg-[#E6F4F3] border border-[#D0E8E6] w-12 h-12 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
        <img
          className="w-6 h-6 object-contain"
          src={theme.icon}
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="space-y-0.5 w-full">
        <h3 className="text-[#0A2E2C] group-hover:text-[#0E6760] font-extrabold text-xs sm:text-sm line-clamp-2 leading-snug">
          {name}
        </h3>
        <p className="text-[#4A6B68] text-[11px] sm:text-xs font-medium">
          {works}
        </p>
      </div>
    </Link>
  );
}
