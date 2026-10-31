import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

export default function PopularBooks({ books }) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-[#0E6760]">
            {t("home.popular.title")}
          </h2>
          <p className="text-[14px] text-[#4A6B68]">
            {t("home.popular.subtitle")}
          </p>
        </div>
        <Link
          to="/explorebooks"
          className="text-[11px] font-semibold text-[#17A296] hover:text-[#0E6760] hover:underline transition-colors"
        >
          {t("home.popular.viewAll")}
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
    </div>
  );
}
