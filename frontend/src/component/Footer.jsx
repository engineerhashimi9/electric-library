import { useTranslation } from "react-i18next";

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
    <footer className={`${className} bg-[#0E6760] border-t border-[#156B6B] px-5 py-6 sm:px-12 sm:py-7 text-[#B8E2DF]`}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="mb-3.5 text-[15px] font-bold text-[#FFFFFF]">
              {col.title}
            </h3>
            <ul className="grid gap-[7px]">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[10.5px] leading-normal text-[#B8E2DF] hover:text-[#17A296] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17A296] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="mb-3.5 text-[15px] font-bold text-[#FFFFFF]">
            {t("footer.legalTitle")}
          </h3>
          <p className="text-[10.5px] leading-normal text-[#B8E2DF]">
            {t("footer.legalDesc")}
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[9.5px] font-bold leading-normal text-[#B8E2DF] hover:text-[#17A296] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17A296] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-9 flex max-w-[1200px] flex-col items-start justify-between gap-4 text-[9.5px] text-[#B8E2DF]/80 border-t border-[#156B6B] pt-5 sm:flex-row sm:items-center">
        <p>
          {t("footer.copyright")}
        </p>
        <p className="text-[8.5px] font-bold tracking-[0.04em] text-[#17A296]">
          {t("footer.edition")}
        </p>
      </div>
    </footer>
  );
}
