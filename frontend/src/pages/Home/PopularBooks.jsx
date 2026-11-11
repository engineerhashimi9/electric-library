import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import Eyebrow from "@/component/ui/Eyebrow";

export default function PopularBooks({ books }) {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="popular-heading" className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1">
          <Eyebrow>{t("home.popular.eyebrow")}</Eyebrow>
          <h2 id="popular-heading" className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0E6760] tracking-tight">
            {t("home.popular.title")}
          </h2>
          <p className="text-xs sm:text-sm text-[#4A6B68] font-medium">
            {t("home.popular.subtitle")}
          </p>
        </div>
        <Link
          to="/explorebooks"
          className="text-xs sm:text-sm font-bold text-[#0E6760] hover:text-[#17A296] hover:underline underline-offset-4 transition-colors shrink-0 self-start sm:self-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded"
        >
          {t("home.popular.viewAll")}
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
    </section>
  );
}
