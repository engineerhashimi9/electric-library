import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AuthorCard from "./AuthorCard";

export default function MasterCurators({ authors }) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg md:text-xl font-bold text-[#0E6760]">
          {t("home.curators.title")}
        </h2>
        <Link
          to="/author"
          className="text-xs font-semibold text-[#17A296] hover:text-[#0E6760] hover:underline transition-colors shrink-0"
        >
          {t("home.curators.viewAll")}
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {authors.map((a, idx) => (
          <AuthorCard key={idx} author={a} />
        ))}
      </div>
    </div>
  );
}