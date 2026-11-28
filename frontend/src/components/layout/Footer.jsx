import React from "react";
import { useTranslation } from "react-i18next";
import BrandLogo from "../ui/BrandLogo";

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
    <footer className={`app-footer ${className}`}>
      <div className="footer-content">
        <div className="footer-brand-section">
          <div className="d-flex items-center gap-2">
            <BrandLogo />
            <span className="footer-brand-title">{t("nav.brand")}</span>
          </div>
          <p className="footer-desc">{t("footer.legalDesc")}</p>
          <div className="d-flex flex-wrap gap-3" style={{ marginTop: "0.5rem" }}>
            {legalLinks.map((link) => (
              <a key={link} href="#legal" className="footer-link">
                {link}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="footer-links-col">
            <h3>{col.title}</h3>
            <ul className="footer-links-list">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#archive" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
        <span className="footer-edition-badge">{t("footer.edition")}</span>
      </div>
    </footer>
  );
}
