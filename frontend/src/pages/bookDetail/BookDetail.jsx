import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { GlobalContext } from "@/context/language_context";;
import axios from "axios";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Heart,
  Share2,
  BookOpen,
  Download,
  CheckCircle2,
  Bookmark,
  Calendar,
  Layers,
  Globe2,
  Building2,
  FolderTree,
  FileText,
  Quote,
  Sparkles,
  Info,
  Headphones,
} from "lucide-react";
import { getBookById, getRelatedBooks } from "@/data/booksRepository";
import { getLocalized } from "@/utils/langHelper";
import { useFavoritesContext } from "@/context/FavoritesContext";
import BookExcerptModal from "@/components/common/BookExcerptModal";
import { useContext } from "react";
export default function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRtl = lang === "fa";

  const { isFavorite: checkFavorite, toggleFavorite } = useFavoritesContext();
  const { currentLanguage } = useContext(GlobalContext);
  const baseBook = getBookById(id);
  const [apiBook, setApiBook] = useState(null);

  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "specs" | "reviews"
  const [isBorrowed, setIsBorrowed] = useState(false);
  const [isExcerptOpen, setIsExcerptOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setImageError(false);
    if (id) {
      axios
        .get(`http://127.0.0.1:8000/api/v1/${currentLanguage}/books/${id}/`)
        .then((response) => {
          if (response.data && response.data.id) {
            setApiBook(response.data);
          }
        })
        .catch(() => {
          // Gracefully continue using local book repository
        });
    }
  }, [currentLanguage, id]);

  const book = apiBook
    ? {
        ...baseBook,
        ...apiBook,
        title: apiBook.title || baseBook.title,
        description: apiBook.description || baseBook.description,
        cover: apiBook.cover || baseBook.cover,
      }
    : baseBook;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3200);
  };

  const isFavorite = checkFavorite(book?.id || book?.numericId);

  const handleToggleFavorite = () => {
    if (book) {
      toggleFavorite(book);
    }
  };

  const handleBorrow = () => {
    setIsBorrowed(true);
    showToast(t("bookDetail.borrowSuccess"));
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      showToast(t("bookDetail.copied"));
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      showToast(window.location.href);
    }
  };

  if (!book) {
    return (
      <main
        className="page-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "var(--primary)",
            marginBottom: "0.5rem",
          }}
        >
          {t("bookDetail.notFound")}
        </h1>
        <Link to="/explorebooks" className="btn btn-primary btn-md">
          {t("bookDetail.returnExplore")}
        </Link>
      </main>
    );
  }

  const title = getLocalized(book.title, lang);
  const authorName =
    typeof book.author === "object" && book.author !== null
      ? book.author.name
        ? `${book.author.name} ${book.author.last_name || ""}`.trim()
        : getLocalized(book.author, lang)
      : String(book.author || "");
  const description = getLocalized(book.description, lang);
  const quote = book.quote ? getLocalized(book.quote, lang) : "";
  const curatorNote = book.curatorNote
    ? getLocalized(book.curatorNote, lang)
    : "";
  const relatedBooks = getRelatedBooks(book.id, 4);

  return (
    <div className="page-container">
      {/* Toast notification banner */}
      {toastMessage && (
        <aside role="status" aria-live="polite" className="toast-floating">
          <Sparkles size={16} style={{ color: "#9EEFE8", flexShrink: 0 }} />
          <span>{toastMessage}</span>
        </aside>
      )}

      <BookExcerptModal
        book={book}
        isOpen={isExcerptOpen}
        onClose={() => setIsExcerptOpen(false)}
      />

      <main
        className="content-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          paddingTop: "1.5rem",
        }}
      >
        {/* Navigation & Breadcrumbs */}
        <nav
          aria-label="Breadcrumbs"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.85rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/"
              style={{ color: "var(--text-secondary)", fontWeight: 600 }}
            >
              {t("bookDetail.breadcrumbHome")}
            </Link>
            <span style={{ color: "var(--border-color)", fontWeight: 800 }}>
              /
            </span>
            <Link
              to="/explorebooks"
              style={{ color: "var(--text-secondary)", fontWeight: 600 }}
            >
              {t("bookDetail.breadcrumbExplore")}
            </Link>
            <span style={{ color: "var(--border-color)", fontWeight: 800 }}>
              /
            </span>
            <span
              style={{ color: "var(--primary)", fontWeight: 800 }}
              className="truncate"
            >
              {title}
            </span>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-outline btn-sm"
            style={{ gap: "0.45rem" }}
          >
            {isRtl ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
            <span>{t("bookDetail.back")}</span>
          </button>
        </nav>

        {/* Hero Book Presentation */}
        <section
          aria-labelledby="book-detail-title"
          className="book-detail-hero-card"
        >
          <div className="book-detail-layout">
            {/* Left Column: Book Cover */}
            <div className="detail-cover-container">
              <div className="detail-cover-frame">
                {imageError ? (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "1.5rem",
                      textAlign: "center",
                      backgroundColor: "var(--bg-secondary)",
                    }}
                  >
                    <BookOpen
                      size={44}
                      style={{
                        color: "var(--primary)",
                        marginBottom: "0.5rem",
                      }}
                    />
                    <span style={{ fontWeight: 800, color: "var(--primary)" }}>
                      {title}
                    </span>
                  </div>
                ) : (
                  <>
                    <img
                      src={book.cover_image_url || book.cover}
                      alt={title}
                      onError={() => setImageError(true)}
                      className="detail-cover-image"
                    />
                    <div className="book-spine-depth" />
                  </>
                )}

                {/* Format pill badge */}
                <div
                  className="badge badge-teal"
                  style={{
                    position: "absolute",
                    top: "0.85rem",
                    left: isRtl ? "auto" : "0.85rem",
                    right: isRtl ? "0.85rem" : "auto",
                    gap: "0.4rem",
                  }}
                >
                  {book.format === "audio" ? (
                    <Headphones size={13} />
                  ) : (
                    <BookOpen size={13} />
                  )}
                  <span>{book.format}</span>
                </div>

                {/* Favorite Heart Button */}
                <button
                  type="button"
                  onClick={handleToggleFavorite}
                  aria-label={
                    isFavorite
                      ? t("bookDetail.inFavorites")
                      : t("bookDetail.addToFavorites")
                  }
                  className={`book-fav-btn ${isFavorite ? "favorited" : ""}`}
                  style={{
                    position: "absolute",
                    top: "0.85rem",
                    right: isRtl ? "auto" : "0.85rem",
                    left: isRtl ? "0.85rem" : "auto",
                  }}
                >
                  <Heart
                    size={18}
                    style={{
                      fill: isFavorite ? "var(--primary-light)" : "none",
                      color: isFavorite
                        ? "var(--primary-light)"
                        : "var(--text-secondary)",
                    }}
                  />
                </button>
              </div>

              {/* Action Buttons Below Cover */}
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  width: "100%",
                  maxWidth: "320px",
                }}
              >
                <button
                  type="button"
                  onClick={handleToggleFavorite}
                  className={`btn ${isFavorite ? "btn-secondary" : "btn-outline"} btn-sm flex-1`}
                  style={{ gap: "0.4rem" }}
                >
                  <Bookmark
                    size={15}
                    style={{
                      fill: isFavorite ? "var(--primary-light)" : "none",
                    }}
                  />
                  <span className="truncate">
                    {isFavorite
                      ? t("bookDetail.inFavorites")
                      : t("bookDetail.addToFavorites")}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  aria-label={t("bookDetail.share")}
                  className={`btn ${isCopied ? "btn-primary" : "btn-outline"} btn-sm`}
                  style={{ padding: "0.5rem" }}
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>

            {/* Right Column: Book Details & Actions */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Genre & Availability Badge */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <span className="badge badge-sage">
                  {book.genre
                    ? getLocalized(book.genre, lang)
                    : "Classical Edition"}
                </span>
                <span className="badge badge-sage" style={{ gap: "0.4rem" }}>
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: "var(--primary-light)",
                    }}
                  />
                  <span>{t("bookDetail.available")}</span>
                </span>
              </div>

              {/* Title & Author */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                <h1
                  id="book-detail-title"
                  className="font-serif"
                  style={{
                    fontSize: "2.35rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    lineHeight: 1.25,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {title}
                </h1>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    fontWeight: 600,
                  }}
                >
                  {lang === "fa" ? "اثر: " : "By "}
                  <Link
                    to="/author"
                    style={{
                      color: "var(--primary)",
                      fontWeight: 800,
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    {authorName}
                  </Link>
                </p>
              </div>

              {/* Rating & Reviews Bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  padding: "0.75rem 0",
                  borderTop: "1px solid var(--border-light)",
                  borderBottom: "1px solid var(--border-light)",
                  fontSize: "0.85rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontWeight: 800,
                  }}
                >
                  <Star size={16} className="star-filled" />
                  <span>{book.rating || 4.8}</span>
                  <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>
                    / 5.0
                  </span>
                </div>
                <span style={{ color: "var(--border-color)" }}>•</span>
                <span style={{ color: "var(--text-secondary)" }}>
                  {book.reviews || "1,420"} {t("bookCard.reviews")}
                </span>
                <span style={{ color: "var(--border-color)" }}>•</span>
                <span className="badge badge-sage">
                  {book.shelf || "Archive Folio"}
                </span>
              </div>

              {/* Key Specs Quick Grid */}
              <div className="detail-specs-grid">
                <div className="detail-spec-card">
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {t("bookDetail.pages")}
                  </span>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                    }}
                  >
                    {book.pages
                      ? `${book.pages} ${lang === "fa" ? "صفحه" : "pp"}`
                      : "—"}
                  </span>
                </div>

                <div className="detail-spec-card">
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {t("bookDetail.format")}
                  </span>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                      textTransform: "uppercase",
                    }}
                  >
                    {book.format || "ebook"}
                  </span>
                </div>

                <div className="detail-spec-card">
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {t("bookDetail.published")}
                  </span>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                    }}
                  >
                    {book.publishedYear || "2002"}
                  </span>
                </div>

                <div className="detail-spec-card">
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {t("bookDetail.fileSize")}
                  </span>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                    }}
                    className="truncate"
                  >
                    {book.fileSize || "14.8 MB"}
                  </span>
                </div>
              </div>

              {/* Notable Excerpt Callout */}
              {quote && (
                <div className="curator-note-callout">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "var(--primary-light)",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                    }}
                  >
                    <Quote size={15} />
                    <span>{t("bookDetail.quote", "MEMORABLE PASSAGE")}</span>
                  </div>
                  <p
                    style={{
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                      color: "var(--primary)",
                      lineHeight: 1.6,
                    }}
                  >
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "0.75rem",
                  paddingTop: "0.5rem",
                }}
              >
                <button
                  type="button"
                  onClick={handleBorrow}
                  className="btn btn-primary btn-lg flex-1"
                  style={{ gap: "0.5rem" }}
                >
                  {isBorrowed ? (
                    <>
                      <CheckCircle2 size={18} />
                      <span>
                        {lang === "fa"
                          ? "امانت گرفته شد"
                          : "Borrowed (Active Loan)"}
                      </span>
                    </>
                  ) : (
                    <>
                      <BookOpen size={18} />
                      <span>{t("bookDetail.borrow")}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsExcerptOpen(true)}
                  className="btn btn-outline btn-lg"
                  style={{ gap: "0.5rem" }}
                  title="Read online excerpt"
                >
                  <BookOpen size={18} />
                  <span>
                    {lang === "fa" ? "مطالعه نمونه" : "Sample Reader"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => showToast(t("bookDetail.downloadSuccess"))}
                  className="btn btn-secondary btn-lg"
                  style={{ gap: "0.5rem" }}
                >
                  <Download size={18} />
                  <span>{t("bookDetail.download")}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Navigation Tabs */}
        <section
          aria-label="Book In-Depth Information"
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              borderBottom: "1px solid var(--border-color)",
              paddingBottom: "0.5rem",
              overflowX: "auto",
            }}
          >
            {[
              {
                id: "overview",
                label: t("bookDetail.overview"),
                icon: FileText,
              },
              {
                id: "specs",
                label: t("bookDetail.specifications"),
                icon: Layers,
              },
              { id: "reviews", label: t("bookDetail.reviews"), icon: Star },
            ].map(({ id: tabId, label, icon: TabIcon }) => (
              <button
                key={tabId}
                type="button"
                onClick={() => setActiveTab(tabId)}
                className={`btn ${activeTab === tabId ? "btn-primary" : "btn-ghost"} btn-sm`}
                style={{ gap: "0.4rem" }}
              >
                <TabIcon size={15} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Tab 1: Overview & Synopsis */}
          {activeTab === "overview" && (
            <div
              className="card-surface"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <BookOpen
                    size={18}
                    style={{ color: "var(--primary-light)" }}
                  />
                  <span>{t("bookDetail.overview")}</span>
                </h2>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {description}
                </p>
              </div>

              {curatorNote && (
                <div
                  style={{
                    borderTop: "1px solid var(--border-light)",
                    paddingTop: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <Sparkles
                      size={14}
                      style={{ color: "var(--primary-light)" }}
                    />
                    <span>{t("bookDetail.curatorNote")}</span>
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontStyle: "italic",
                      color: "var(--text-secondary)",
                      backgroundColor: "var(--bg-secondary)",
                      padding: "1rem",
                      borderRadius: "var(--radius-lg)",
                    }}
                  >
                    {curatorNote}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Specifications */}
          {activeTab === "specs" && (
            <div className="card-surface" style={{ padding: "2rem" }}>
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "var(--primary)",
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Layers size={18} style={{ color: "var(--primary-light)" }} />
                <span>{t("bookDetail.specifications")}</span>
              </h2>

              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div className="detail-spec-card">
                  <dt
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {t("bookDetail.isbn")}
                  </dt>
                  <dd
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                    }}
                  >
                    {book.isbn || "978-1400079278"}
                  </dd>
                </div>

                <div className="detail-spec-card">
                  <dt
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {t("bookDetail.publisher")}
                  </dt>
                  <dd
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                    }}
                  >
                    {book.publisher
                      ? getLocalized(book.publisher, lang)
                      : "Vintage Archival Press"}
                  </dd>
                </div>

                <div className="detail-spec-card">
                  <dt
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {t("bookDetail.published")}
                  </dt>
                  <dd
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                    }}
                  >
                    {book.publishedYear || "2002"}
                  </dd>
                </div>

                <div className="detail-spec-card">
                  <dt
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {t("bookDetail.language")}
                  </dt>
                  <dd
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                    }}
                  >
                    {book.language
                      ? getLocalized(book.language, lang)
                      : "English"}
                  </dd>
                </div>

                <div className="detail-spec-card">
                  <dt
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {t("bookDetail.shelfLocation")}
                  </dt>
                  <dd
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                    }}
                  >
                    {book.shelf || "Stack IV • Shelf 12"}
                  </dd>
                </div>
              </dl>
            </div>
          )}

          {/* Tab 3: Reviews */}
          {activeTab === "reviews" && (
            <div
              className="card-surface"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Star size={18} className="star-filled" />
                    <span>{t("bookDetail.reviews")}</span>
                  </h2>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      marginTop: "2px",
                    }}
                  >
                    {book.reviews || "1,420"} {t("bookCard.reviews")} •{" "}
                    {book.rating || 4.8} / 5.0
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    showToast(
                      lang === "fa"
                        ? "بخش ثبت نظر برای اعضای رسمی فعال است."
                        : "Review submission is open to verified scholars.",
                    )
                  }
                  className="btn btn-primary btn-sm"
                >
                  {lang === "fa"
                    ? "ثبت دیدگاه یا یادداشت"
                    : "Write a Reflection"}
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <article
                  style={{
                    padding: "1.25rem",
                    borderRadius: "var(--radius-xl)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.65rem",
                      }}
                    >
                      <div
                        className="avatar-circle"
                        style={{
                          width: "32px",
                          height: "32px",
                          fontSize: "0.75rem",
                        }}
                      >
                        EV
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 800,
                            color: "var(--primary)",
                          }}
                        >
                          Eleanor Vance
                        </h4>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          {lang === "fa"
                            ? "عضو پیوسته بایگانی • ۲ هفته قبل"
                            : "Curator Fellow • 2 weeks ago"}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} className="star-filled" />
                      ))}
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {lang === "fa"
                      ? "یکی از غنی‌ترین و ماندگارترین متونی که تاکنون در آرشیو کتابخانه مطالعه کرده‌ام. نگارش، ساختار روایی و عمق اندیشه در بالاترین سطح قرار دارد."
                      : "A monumental achievement in literary form. The cadence of the language and emotional clarity render this an indispensable volume for any serious reader."}
                  </p>
                </article>
              </div>
            </div>
          )}
        </section>

        {/* Related Books Section */}
        {relatedBooks.length > 0 && (
          <section
            aria-labelledby="related-heading"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              paddingTop: "1rem",
            }}
          >
            <div>
              <span className="badge badge-sage">
                {t("bookDetail.relatedTitle")}
              </span>
              <h2
                id="related-heading"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "var(--primary)",
                  marginTop: "0.25rem",
                }}
              >
                {t("bookDetail.relatedSubtitle")}
              </h2>
            </div>

            <div className="books-grid">
              {relatedBooks.map((relBook) => {
                const relTitle = getLocalized(relBook.title, lang);
                const relAuthor = getLocalized(relBook.author, lang);
                return (
                  <article key={relBook.id} className="book-card-container">
                    <div className="book-cover-wrapper">
                      <Link to={`/book/${relBook.id}`}>
                        <img
                          src={relBook.cover}
                          alt={relTitle}
                          loading="lazy"
                          className="book-cover-image"
                        />
                        <div className="book-spine-depth" />
                      </Link>
                    </div>

                    <div className="book-content-body">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.35rem",
                        }}
                      >
                        <Star
                          size={12}
                          className="star-filled"
                          aria-hidden="true"
                        />
                        <span style={{ fontSize: "0.75rem", fontWeight: 800 }}>
                          {relBook.rating}
                        </span>
                      </div>

                      <Link to={`/book/${relBook.id}`}>
                        <h3 className="book-card-title">{relTitle}</h3>
                      </Link>
                      <p className="book-card-author">{relAuthor}</p>

                      <div className="book-card-footer">
                        <Link
                          to={`/book/${relBook.id}`}
                          className="btn btn-secondary btn-sm w-full"
                          style={{ gap: "0.35rem" }}
                        >
                          <Info size={13} />
                          <span>{t("bookCard.detail")}</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
