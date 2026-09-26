import React from "react";
import {
  Search,
  Bookmark,
  Star,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Volume2,
  Download,
  ShieldCheck,
  Heart,
} from "lucide-react";

import Navbar from "../component/Navbar";

export const HomePage = () => {
  /* 
    ========================================================================
    BACKEND API INTEGRATION POINTS:
    ------------------------------------------------------------------------
    1. User Profile Data: 
       - GET /api/user/profile -> { name: "Clara", streakDays: 14 }
    2. Spotlight Book: 
       - GET /api/books/spotlight -> { title, author, rating, coverImage, ... }
    3. Active Reading (In Progress): 
       - GET /api/user/active-reading -> { bookTitle, progressPercent, currentPage, totalPages, ... }
    4. Categories / Themes: 
       - GET /api/categories -> [{ id, name, count }]
    5. Popular Books / New Arrivals: 
       - GET /api/books?type=popular -> [{ id, title, author, rating, cover, tag }]
    6. Master Curators / Authors: 
       - GET /api/authors/featured -> [{ id, name, worksCount, avatar }]
    ========================================================================
  */

  return (
    <div
      className="min-h-screen bg-[#FBF9F5] text-[#1A202C] pb-20 md:pb-12"
      dir="ltr"
    >
      {/* ========================================================= */}
      {/* P HEADER / NAVIGATION                            */}
      {/* ========================================================= */}

      <Navbar />

      <main className="max-w-7xl mx-auto px-5 md:px-8 space-y-8 md:space-y-12 pt-2 md:pt-6">
        {/* ========================================================= */}
        {/* 3. HERO / SPOTLIGHT SECTION                               */}
        {/* ========================================================= */}
        {/* Mobile Greeting */}
        <div className="md:hidden space-y-1">
          <div className="flex items-center justify-between">
            {/* BACKEND: Dynamic user first name */}
            <h1 className="font-serif text-2xl text-[#1A202C]">
              Good evening, Clara
            </h1>
            {/* BACKEND: User reading streak count */}
            <span className="px-2.5 py-1 bg-[#FDF0EC] text-[#C86D51] text-[11px] font-medium rounded-full flex items-center gap-1">
              🔥 14-Day Streak
            </span>
          </div>
          <p className="text-xs text-[#4A5568]">
            What will inspire your curiosity tonight?
          </p>
        </div>

        {/* Desktop Hero Banner */}
        <div className="hidden md:grid grid-cols-12 gap-8 items-center bg-[#F4F0E8] p-8 rounded-2xl border border-[#E2E8F0]">
          <div className="col-span-7 space-y-7">
            <span className="text-xs font-semibold text-[#C86D51] uppercase tracking-wider">
              ✦ GOOD EVENING, CLARA
            </span>
            <h1 className="font-serif font-bold text-4xl text-[#1A202C] leading-tight">
              Immerse in timeless literature & rare editions
            </h1>
            <p className="text-sm text-[#4A5568] leading-relaxed max-w-lg">
              Access over 120,000 carefully conserved volumes, from privately
              bound illuminated folios to critical modern masterpieces.
              Preserved in archival typographic clarity.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <button className="px-6 py-2.5 bg-[#07241A] text-white text-xs font-medium rounded-lg hover:bg-[#132820]">
                Explore Catalog
              </button>
              <button className="px-6 py-2.5 border border-[#1A362B] text-[#1A362B] text-xs font-medium rounded-lg hover:bg-[#1A362B]/5">
                View Bestsellers
              </button>
            </div>
          </div>

          {/* Spotlight Card (Shared Data Component) */}
          <div className="col-span-5 bg-[#1A362B] text-white p-5 rounded-xl space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-emerald-200">
              <span className="bg-white/10 px-2 py-0.5 rounded uppercase tracking-wider">
                SPOTLIGHT SELECTION
              </span>
              {/* BACKEND: Spotlight rating */}
              <span className="flex items-center gap-1">
                <Star size={12} className="fill-amber-400 text-amber-400" /> 4.8
                (14.2k)
              </span>
            </div>

            <div className="flex gap-4">
              {/* BACKEND: Spotlight book cover image */}
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300"
                alt="The Shadow of the Wind"
                className="w-24 h-36 object-cover rounded shadow-md shrink-0"
              />
              <div className="space-y-1.5">
                {/* BACKEND: Genre & Title & Author */}
                <span className="text-[10px] text-amber-300 uppercase tracking-wider">
                  GOTHIC MYSTERY
                </span>
                <h3 className="font-serif text-lg leading-snug">
                  The Shadow of the Wind
                </h3>
                <p className="text-xs text-emerald-100">Carlos Ruiz Zafón</p>
                <p className="text-[11px] text-emerald-200/80 line-clamp-3 pt-1">
                  "A secret library containing forgotten volumes preserved to
                  touch the heart of..."
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-1">
              <button className="flex-1 bg-[#C86D51] hover:bg-[#B25C42] text-white py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5">
                <BookOpen size={14} />
                <span>Start Reading</span>
              </button>
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white">
                <Bookmark size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Spotlight Card */}
        <div className="md:hidden bg-[#1A362B] text-white p-4 rounded-xl space-y-3">
          <div className="flex items-center justify-between text-[10px] text-emerald-200">
            <span className="bg-white/10 px-2 py-0.5 rounded uppercase">
              SPOTLIGHT SELECTION
            </span>
            <span className="flex items-center gap-1">
              <Star size={12} className="fill-amber-400 text-amber-400" /> 4.8
              (14.2k)
            </span>
          </div>
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300"
              alt="Book Cover"
              className="w-20 h-28 object-cover rounded shadow"
            />
            <div className="space-y-1">
              <span className="text-[9px] text-amber-300 uppercase">
                GOTHIC MYSTERY
              </span>
              <h3 className="font-serif text-base leading-tight">
                The Shadow of the Wind
              </h3>
              <p className="text-xs text-emerald-100">Carlos Ruiz Zafón</p>
              <p className="text-[10px] text-emerald-200/80 line-clamp-2">
                A secret library containing forgotten volumes...
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex-1 bg-[#C86D51] text-white py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1">
              <BookOpen size={14} />
              <span>Start Reading</span>
            </button>
            <button className="p-2 bg-white/10 rounded-lg">
              <Bookmark size={16} />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. BROWSE THEMES / CATEGORIES                             */}
        {/* ========================================================= */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg md:text-xl text-[#1A202C]">
              Browse Themes
            </h2>
            <span className="text-xs text-[#718096]">Scriptorium Access</span>
          </div>

          {/* BACKEND: Map categories list */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              "All",
              "Literary Fiction",
              "Philosophy",
              "History & Lore",
              "Poetry",
              "Science & Tech",
              "Memoirs",
            ].map((theme, i) => (
              <button
                key={i}
                className={`px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                  i === 0
                    ? "bg-[#1A362B] text-white font-medium"
                    : "bg-[#F3F4F6] text-[#4A5568] hover:bg-gray-200"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. ACTIVE READING (IN PROGRESS)                           */}
        {/* ========================================================= */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg md:text-xl text-[#1A202C]">
              Active Reading
            </h2>
            <a
              href="#shelf"
              className="text-xs text-[#C86D51] font-medium hover:underline"
            >
              Shelf 3 →
            </a>
          </div>

          {/* BACKEND: Current active reading book */}
          <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200"
                alt="Klara and the Sun"
                className="w-12 h-16 object-cover rounded shadow-sm"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-[#1A362B] bg-emerald-50 px-2 py-0.5 rounded uppercase">
                    IN PROGRESS
                  </span>
                  <span className="text-xs text-[#C86D51] font-bold">68%</span>
                </div>
                <h4 className="font-serif text-sm text-[#1A202C] font-semibold">
                  Klara and the Sun
                </h4>
                <p className="text-xs text-[#718096]">
                  Kazuo Ishiguro • Pg 214 of 312 (~23m left)
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100">
              <span className="text-[11px] text-[#4A5568] flex items-center gap-1">
                ✏️ 3 Highlights in Chapter 5
              </span>
              <button className="px-4 py-2 bg-[#1A362B] text-white text-xs font-medium rounded-lg hover:bg-[#132820]">
                Resume →
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 6. POPULAR BOOKS THIS WEEK                                */}
        {/* ========================================================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-lg md:text-xl text-[#1A202C]">
                Popular This Week
              </h2>
              <p className="text-xs text-[#718096]">
                Handpicked by our Literary Circle
              </p>
            </div>
            <a
              href="#all"
              className="text-xs text-[#C86D51] font-medium hover:underline"
            >
              View All 42+ →
            </a>
          </div>

          {/* BACKEND: Map books list */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Invisible Cities",
                author: "Italo Calvino",
                rating: "4.8",
                tag: "Gothic",
                img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300",
              },
              {
                title: "The Goldfinch",
                author: "Donna Tartt",
                rating: "4.7",
                tag: "Pulitzer",
                img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300",
              },
              {
                title: "Meditations",
                author: "Marcus Aurelius",
                rating: "4.9",
                tag: "Philosophy",
                img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300",
              },
              {
                title: "Normal People",
                author: "Sally Rooney",
                rating: "4.6",
                tag: "Fiction",
                img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300",
              },
            ].map((book, idx) => (
              <div
                key={idx}
                className="bg-white p-3 md:p-4 rounded-xl border border-[#E2E8F0] space-y-2 relative group hover:shadow-md transition-all"
              >
                <button className="absolute top-5 right-5 p-1.5 bg-white/80 backdrop-blur rounded-full text-gray-600 hover:text-red-500 z-10">
                  <Heart size={14} />
                </button>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-40 md:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[9px] px-2 py-0.5 rounded backdrop-blur">
                    {book.tag}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[11px] text-amber-600 font-semibold">
                    <Star size={12} className="fill-amber-500 text-amber-500" />
                    <span>{book.rating}</span>
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-[#1A202C] truncate">
                    {book.title}
                  </h4>
                  <p className="text-xs text-[#718096] truncate">
                    {book.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 7. MASTER CURATORS / AUTHORS                              */}
        {/* ========================================================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg md:text-xl text-[#1A202C]">
              Master Curators
            </h2>
            <a
              href="#archived"
              className="text-xs text-[#718096] hover:underline"
            >
              Archived Catalog
            </a>
          </div>

          {/* BACKEND: Map authors list */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
            {[
              {
                name: "Virginia Woolf",
                works: "12 Works",
                img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
              },
              {
                name: "J. L. Borges",
                works: "34 Works",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
              },
              {
                name: "Gabriel Garcia",
                works: "18 Works",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
              },
              {
                name: "Umberto Eco",
                works: "22 Works",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
              },
            ].map((author, idx) => (
              <div
                key={idx}
                className="bg-white p-3 md:p-4 rounded-xl border border-[#E2E8F0] text-center space-y-2 hover:border-[#1A362B] transition-colors"
              >
                <img
                  src={author.img}
                  alt={author.name}
                  className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover mx-auto"
                />
                <div>
                  <h4 className="font-serif text-xs md:text-sm font-semibold text-[#1A202C] truncate">
                    {author.name}
                  </h4>
                  <p className="text-[10px] text-[#718096]">{author.works}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 8. FELLOWSHIP BENEFITS BANNER                             */}
        {/* ========================================================= */}
        <div className="bg-[#F3F4F6] p-5 md:p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C86D51]">
            <ShieldCheck size={16} />
            <span>Lumina Fellowship Benefits</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-100">
              <Download size={18} className="text-[#1A362B] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#1A202C]">
                  Offline Sync Enabled
                </p>
                <p className="text-[11px] text-[#718096]">
                  Save manuscripts to read on flights or transit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-100">
              <BookOpen size={18} className="text-[#1A362B] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#1A202C]">
                  120,000+ Unabridged Titles
                </p>
                <p className="text-[11px] text-[#718096]">
                  Unlimited access to the entire archival collection.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-100">
              <Volume2 size={18} className="text-[#1A362B] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#1A202C]">
                  Curated Audio Editions
                </p>
                <p className="text-[11px] text-[#718096]">
                  Masterfully narrated by archival voice actors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================= */}
      {/* 9. MOBILE BOTTOM NAVIGATION                               */}
      {/* ========================================================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#FBF9F5] border-t border-[#E2E8F0] px-6 py-2 flex justify-between items-center z-50">
        <button className="flex flex-col items-center text-[#1A362B]">
          <BookOpen size={20} />
          <span className="text-[10px] font-semibold mt-1">Home</span>
          <span className="w-1 h-1 bg-[#C86D51] rounded-full mt-0.5"></span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#1A362B]">
          <Search size={20} />
          <span className="text-[10px] mt-1">Explore</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#1A362B]">
          <Bookmark size={20} />
          <span className="text-[10px] mt-1">Library</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#1A362B]">
          <Heart size={20} />
          <span className="text-[10px] mt-1">Favorites</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#1A362B]">
          <div className="w-5 h-5 rounded-full bg-gray-300 border border-gray-400" />
          <span className="text-[10px] mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};
