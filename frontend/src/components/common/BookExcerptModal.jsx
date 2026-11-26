import React, { useState, useEffect } from "react";
import { X, BookOpen, Bookmark, ZoomIn, ZoomOut, Share2, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/utils/langHelper";
import { useFavoritesContext } from "@/context/FavoritesContext";

export default function BookExcerptModal({ book, isOpen, onClose }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRtl = lang === "fa";
  const [fontSize, setFontSize] = useState(18); // 16, 18, 20, 22
  const [copied, setCopied] = useState(false);
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !book) return null;

  const title = getLocalized(book.title, lang);
  const authorName =
    typeof book.author === "object" && book.author !== null
      ? book.author.name
        ? `${book.author.name} ${book.author.last_name || ""}`.trim()
        : getLocalized(book.author, lang)
      : String(book.author || "");
  const quote = book.quote ? getLocalized(book.quote, lang) : "";
  const description = getLocalized(book.description, lang);
  const favoriteActive = isFavorite(book.id || book.numericId);

  const handleCopyQuote = () => {
    const textToCopy = quote ? `“${quote}” — ${authorName}, ${title}` : `${title} by ${authorName}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Reading sample: ${title}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "rgba(10, 46, 44, 0.75)",
        backdropFilter: "blur(10px)",
        animation: "fadeIn 200ms ease-out",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          maxHeight: "90vh",
          backgroundColor: "#FAF9F5", // Warm parchment literary background
          borderRadius: "var(--radius-2xl)",
          border: "1px solid var(--border-color)",
          boxShadow: "var(--shadow-xl)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          animation: "slideUp 250ms cubic-bezier(0.16, 1, 0.3, 1)",
          color: "#2C2A29",
        }}
      >
        {/* Reader Top Bar */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.85rem 1.5rem",
            backgroundColor: "#F2EFE9",
            borderBottom: "1px solid #E5E0D5",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <BookOpen size={18} style={{ color: "var(--primary-light)" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)" }} className="truncate">
                {title}
              </span>
              <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>
                {authorName}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Font Size Adjusters */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                backgroundColor: "#FFFFFF",
                borderRadius: "var(--radius-md)",
                border: "1px solid #E5E0D5",
                padding: "2px 6px",
              }}
            >
              <button
                type="button"
                onClick={() => setFontSize((s) => Math.max(15, s - 2))}
                title="Decrease font size"
                style={{ padding: "0.25rem", color: "var(--text-secondary)" }}
              >
                <ZoomOut size={14} />
              </button>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, minWidth: "24px", textAlign: "center" }}>
                {fontSize}px
              </span>
              <button
                type="button"
                onClick={() => setFontSize((s) => Math.min(26, s + 2))}
                title="Increase font size"
                style={{ padding: "0.25rem", color: "var(--text-secondary)" }}
              >
                <ZoomIn size={14} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => toggleFavorite(book)}
              title={favoriteActive ? "Remove from shelf" : "Add to shelf"}
              style={{
                padding: "0.45rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: favoriteActive ? "var(--primary)" : "#FFFFFF",
                color: favoriteActive ? "#FFFFFF" : "var(--text-secondary)",
                border: "1px solid #E5E0D5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Bookmark size={15} style={{ fill: favoriteActive ? "#FFFFFF" : "none" }} />
            </button>

            <button
              type="button"
              onClick={handleCopyQuote}
              title="Copy quote"
              style={{
                padding: "0.45rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "#FFFFFF",
                color: "var(--text-secondary)",
                border: "1px solid #E5E0D5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {copied ? <Check size={15} style={{ color: "var(--primary-light)" }} /> : <Share2 size={15} />}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close reader"
              style={{
                padding: "0.45rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "#FFFFFF",
                color: "var(--text-secondary)",
                border: "1px solid #E5E0D5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={16} />
            </button>
          </div>
        </header>

        {/* Reader Document Scroll Area */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "2.5rem 3rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            lineHeight: 1.8,
            fontSize: `${fontSize}px`,
          }}
        >
          {/* Header Chapter Title */}
          <div
            style={{
              textAlign: "center",
              borderBottom: "1px solid #E5E0D5",
              paddingBottom: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--primary-light)",
              }}
            >
              {isRtl ? "بخش نخست • آغازین گفتار" : "Chapter I • Prolegomena"}
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--primary)",
                lineHeight: 1.3,
              }}
            >
              {title}
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
              {isRtl ? `به قلم ${authorName}` : `Penned by ${authorName}`}
            </p>
          </div>

          {/* Epigraph Quote */}
          {quote && (
            <div
              style={{
                margin: "0.75rem auto",
                maxWidth: "520px",
                padding: "1.25rem 1.5rem",
                backgroundColor: "#F2EFE9",
                borderRadius: "var(--radius-lg)",
                borderLeft: isRtl ? "none" : "3px solid var(--primary-light)",
                borderRight: isRtl ? "3px solid var(--primary-light)" : "none",
                fontStyle: "italic",
                color: "var(--primary)",
              }}
            >
              <p className="font-serif" style={{ fontSize: `${fontSize - 1}px`, margin: 0 }}>
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          )}

          {/* Body Paragraphs */}
          <div
            className="font-serif"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              color: "#33312E",
              textAlign: "justify",
            }}
          >
            <p>
              {description}
            </p>
            <p>
              {isRtl
                ? "واژه‌ها در سکوت تالارهای کهن پژواک می‌یافتند. هر برگ از این نسخه خطی، رازهایی از دورانی دیرین را در سینه پنهان دارد؛ جایی که خرد و تخیل بر سرنوشت آدمی سایه افکنده بودند."
                : "The quiet hush of the library seemed to hold its breath. Every margin, lined with the faint traces of century-old sepia annotations, bore silent witness to the curious minds that had lingered here before. In these preserved lines, the timeless resonance of human longing and philosophical insight speaks directly across eras."}
            </p>
            <p>
              {isRtl
                ? "خواننده با گام نهادن در این جهان، نه تنها کلمات را مرور می‌کند، بلکه به ژرفای اندیشه‌ای پا می‌گذارد که مرزهای زمان و مکان را درنوردیده است."
                : "To open this volume is to step into an intimate conversation with antiquity, where every thought has been weighed, curated, and held safe from the relentless erosion of time."}
            </p>
          </div>
        </div>

        {/* Reader Footer */}
        <footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#F2EFE9",
            borderTop: "1px solid #E5E0D5",
            fontSize: "0.78rem",
            color: "var(--text-secondary)",
          }}
        >
          <span>{isRtl ? "نمای خوانش بدون حواس‌پرتی" : "Distraction-Free Archival Reader"}</span>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary btn-sm"
            style={{ fontSize: "0.75rem" }}
          >
            {isRtl ? "بستن خوانشگر" : "Finished Sample"}
          </button>
        </footer>
      </div>
    </div>
  );
}
