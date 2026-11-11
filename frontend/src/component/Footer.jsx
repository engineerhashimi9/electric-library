import { useTranslation } from "react-i18next";
import BrandLogo from "./ui/BrandLogo";

export default function Footer({ className = "" }) {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("footer.archives"),
      links: [
        t("footer.firstEditions"),
        t("footer.classicalPhilosophy"),
        t("footer.naturalists"),
        t("footer.monographs"),
        t("footer.epistolary"),
      ],
    },
    {
      title: t("footer.utilities"),
      links: [
        t("footer.marginaliaSync"),
        t("footer.exportTools"),
        t("footer.typography"),
        t("footer.offlineSlates"),
        t("footer.diagnostics"),
      ],
    },
    {
      title: t("footer.guild"),
      links: [
        t("footer.charter"),
        t("footer.peerReview"),
        t("footer.grants"),
        t("footer.restorations"),
        t("footer.guidelines"),
      ],
    },
  ];

  const legalLinks = [
    t("footer.rights"),
    t("footer.privacy"),
    t("footer.colophon"),
  ];

  return (
    <footer className={`${className} bg-[#0E6760] border-t border-[#156B6B] px-5 py-10 sm:px-10 sm:py-12 text-[#B8E2DF]`}>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <BrandLogo className="w-8 h-8 rounded-xl" />
            <span className="text-xl font-extrabold text-[#FFFFFF] tracking-tight">
              {t("nav.brand")}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#B8E2DF] leading-relaxed max-w-sm">
            {t("footer.legalDesc")}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#legal"
                className="text-xs font-semibold text-[#B8E2DF] hover:text-[#FFFFFF] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#FFFFFF]">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#archive"
                    className="text-xs sm:text-sm leading-normal text-[#B8E2DF] hover:text-[#FFFFFF] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] rounded transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col items-start justify-between gap-4 text-xs text-[#B8E2DF]/80 border-t border-[#156B6B] pt-6 sm:flex-row sm:items-center">
        <p>
          {t("footer.copyright")}
        </p>
        <p className="text-xs font-bold tracking-wider text-[#FFFFFF] bg-[#156B6B] px-3 py-1 rounded-full">
          {t("footer.edition")}
        </p>
      </div>
    </footer>
  );
}
