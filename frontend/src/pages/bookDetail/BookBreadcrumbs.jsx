import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * BookBreadcrumbs
 * Top navigation bar showing Home / Explore / Book Title and a Back button.
 */
export default function BookBreadcrumbs({ title, isRtl }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <nav
      aria-label="Breadcrumbs"
      className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#4A6B68]"
    >
      {/* Breadcrumb links (Home / Explore / Book Title) */}
      <div className="flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-[#0E6760] transition-colors font-medium">
          {t("bookDetail.breadcrumbHome")}
        </Link>
        <span className="text-[#D0E8E6] font-bold">/</span>
        <Link to="/explorebooks" className="hover:text-[#0E6760] transition-colors font-medium">
          {t("bookDetail.breadcrumbExplore")}
        </Link>
        <span className="text-[#D0E8E6] font-bold">/</span>
        <span className="text-[#0E6760] font-bold truncate max-w-[200px] sm:max-w-xs">
          {title}
        </span>
      </div>

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#D0E8E6] bg-[#FFFFFF] hover:bg-[#E6F4F3] text-[#0E6760] font-bold text-xs transition-colors shadow-library-sm active:scale-95"
      >
        {isRtl ? <ArrowRight size={14} aria-hidden="true" /> : <ArrowLeft size={14} aria-hidden="true" />}
        <span>{t("bookDetail.back")}</span>
      </button>
    </nav>
  );
}
