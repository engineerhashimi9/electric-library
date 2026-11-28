import React, { useState, useEffect, useRef, useMemo } from "react";
import { Search, X, BookOpen, User, Star, ArrowRight, CornerDownLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { allBooks } from "@/data/booksRepository";
import { authors as allAuthors } from "@/pages/Authors/authors";
import { getLocalized } from "@/utils/langHelper";

export default function QuickSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("all"); // "all" | "books" | "authors"
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRtl = lang === "fa";

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open through custom event or parent
          window.dispatchEvent(new CustomEvent("open-quick-search"));
        }
      }
      if (isOpen && e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();

    let bookMatches = [];
    let authorMatches = [];

    if (filterType === "all" || filterType === "books") {
      bookMatches = allBooks
        .filter((book) => {
          if (!q) return true;
          const titleStr = typeof book.title === "object" ? `${book.title.en} ${book.title.fa}` : book.title;
          const authorStr = typeof book.author === "object" ? `${book.author.en} ${book.author.fa}` : book.author;
          const genreStr = typeof book.genre === "object" ? `${book.genre.en} ${book.genre.fa}` : (book.genre || "");
          return [titleStr, authorStr, genreStr].join(" ").toLowerCase().includes(q);
        })
        .slice(0, q ? 8 : 4)
        .map((b) => ({ type: "book", item: b }));
    }

    if (filterType === "all" || filterType === "authors") {
      authorMatches = allAuthors
        .filter((author) => {
          if (!q) return false;
          const nameStr = typeof author.name === "object" ? `${author.name.en} ${author.name.fa}` : author.name;
          const roleStr = typeof author.role === "object" ? `${author.role.en} ${author.role.fa}` : (author.role || "");
          return [nameStr, roleStr].join(" ").toLowerCase().includes(q);
        })
        .slice(0, 4)
        .map((a) => ({ type: "author", item: a }));
    }

    return [...bookMatches, ...authorMatches];
  }, [query, filterType]);

  const handleSelect = (result) => {
    onClose();
    if (result.type === "book") {
      navigate(`/book/${result.item.id}`);
    } else if (result.type === "author") {
      navigate(`/author`);
    }
  };

  const handleKeyDownInList = (e) => {
    if (searchResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % searchResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (searchResults[selectedIndex]) {
        handleSelect(searchResults[selectedIndex]);
      } else if (query.trim()) {
        onClose();
        navigate(`/explorebooks?q=${encodeURIComponent(query.trim())}`);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quick search modal"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "4rem 1rem 1rem",
        backgroundColor: "rgba(10, 46, 44, 0.65)",
        backdropFilter: "blur(12px)",
        animation: "fadeIn 180ms ease-out",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          backgroundColor: "var(--bg-card)",
          borderRadius: "var(--radius-2xl)",
          border: "1px solid var(--border-color)",
          boxShadow: "var(--shadow-xl)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          animation: "slideUp 220ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onKeyDown={handleKeyDownInList}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem 1.25rem",
            borderBottom: "1px solid var(--border-color)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <Search size={20} style={{ color: "var(--primary-light)", flexShrink: 0 }} aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder={
              lang === "fa"
                ? "جستجو در هزاران کتاب، نویسنده و سبک ادبی..."
                : "Search volumes, classical authors, genres..."
            }
            style={{
              flex: 1,
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear query"
              style={{
                padding: "0.25rem",
                color: "var(--text-secondary)",
                borderRadius: "var(--radius-full)",
              }}
            >
              <X size={16} />
            </button>
          )}
          <kbd
            style={{
              fontSize: "0.7rem",
              fontWeight: 800,
              color: "var(--text-muted)",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              padding: "0.2rem 0.5rem",
              borderRadius: "var(--radius-sm)",
              fontFamily: "monospace",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.6rem 1.25rem",
            backgroundColor: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border-color)",
            fontSize: "0.78rem",
          }}
        >
          <span style={{ color: "var(--text-muted)", fontWeight: 700, marginInlineEnd: "0.25rem" }}>
            {lang === "fa" ? "فیلتر:" : "Filter:"}
          </span>
          {[
            { id: "all", label: lang === "fa" ? "همه نتایج" : "All" },
            { id: "books", label: lang === "fa" ? "کتاب‌ها" : "Volumes" },
            { id: "authors", label: lang === "fa" ? "نویسندگان" : "Authors" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilterType(tab.id)}
              className={`chip ${filterType === tab.id ? "active" : ""}`}
              style={{ padding: "0.2rem 0.65rem", fontSize: "0.75rem" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          style={{
            maxHeight: "380px",
            overflowY: "auto",
            padding: "0.5rem 0",
          }}
        >
          {searchResults.length > 0 ? (
            searchResults.map((res, idx) => {
              const isSelected = selectedIndex === idx;
              if (res.type === "book") {
                const book = res.item;
                const title = getLocalized(book.title, lang);
                const author = typeof book.author === "object" ? getLocalized(book.author, lang) : book.author;
                const genre = typeof book.genre === "object" ? getLocalized(book.genre, lang) : book.genre;

                return (
                  <div
                    key={`book-${book.id}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleSelect(res)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.85rem",
                      padding: "0.65rem 1.25rem",
                      cursor: "pointer",
                      backgroundColor: isSelected ? "var(--bg-secondary)" : "transparent",
                      borderInlineStart: isSelected ? "3px solid var(--primary-light)" : "3px solid transparent",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", minWidth: 0 }}>
                      <img
                        src={book.cover}
                        alt=""
                        style={{
                          width: "36px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "var(--radius-xs)",
                          boxShadow: "var(--shadow-xs)",
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 }}>
                        <p
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 800,
                            color: "var(--primary)",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {title}
                        </p>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                          {author} • <span style={{ color: "var(--primary-light)" }}>{genre}</span>
                        </p>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.2rem",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
                        <Star size={12} className="star-filled" />
                        <span>{book.rating}</span>
                      </div>
                      <ArrowRight size={14} style={{ color: "var(--text-muted)" }} />
                    </div>
                  </div>
                );
              } else {
                const author = res.item;
                const name = getLocalized(author.name, lang);
                const role = getLocalized(author.role, lang);

                return (
                  <div
                    key={`author-${author.id || name}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleSelect(res)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.85rem",
                      padding: "0.65rem 1.25rem",
                      cursor: "pointer",
                      backgroundColor: isSelected ? "var(--bg-secondary)" : "transparent",
                      borderInlineStart: isSelected ? "3px solid var(--primary-light)" : "3px solid transparent",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", minWidth: 0 }}>
                      <img
                        src={author.avatar}
                        alt=""
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          flexShrink: 0,
                          border: "1.5px solid var(--border-color)",
                        }}
                      />
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <p style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--primary)" }}>
                          {name}
                        </p>
                        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                          {role}
                        </p>
                      </div>
                    </div>

                    <span className="badge badge-sage" style={{ fontSize: "0.68rem" }}>
                      {lang === "fa" ? "نویسنده" : "Author"}
                    </span>
                  </div>
                );
              }
            })
          ) : (
            <div
              style={{
                padding: "2.5rem 1.5rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Sparkles size={24} style={{ color: "var(--primary-light)", opacity: 0.6 }} />
              <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)" }}>
                {lang === "fa" ? "اثری با این مشخصات یافت نشد" : "No matching volumes found"}
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {lang === "fa"
                  ? "برای مشاهده تمام کتاب‌ها کلید Enter را فشار دهید"
                  : "Press Enter to explore the full public catalog"}
              </p>
            </div>
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.65rem 1.25rem",
            backgroundColor: "var(--bg-secondary)",
            borderTop: "1px solid var(--border-color)",
            fontSize: "0.72rem",
            color: "var(--text-secondary)",
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <kbd style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", padding: "0.1rem 0.35rem", borderRadius: "4px" }}>↑↓</kbd>
              <span>{lang === "fa" ? "پیمایش" : "Navigate"}</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <kbd style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", padding: "0.1rem 0.35rem", borderRadius: "4px" }}>↵</kbd>
              <span>{lang === "fa" ? "انتخاب" : "Select"}</span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              navigate(`/explorebooks?q=${encodeURIComponent(query)}`);
            }}
            style={{
              color: "var(--primary)",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <span>{lang === "fa" ? "مشاهده تمام نتایج" : "Explore all results"}</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
