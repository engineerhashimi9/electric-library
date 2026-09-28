import Navbar from "@/component/Navbar";
import MobileGreeting from "./MobileGreeting";
import HeroBanner from "./Herobanner";
import MobileSpotlightCard from "./MobileSpotlightCard";
import PopularBooks from "./PopularBooks";
import BrowseThemes from "./BrowseThemes";
import MasterCurators from "./Mastercurators";
import BenefitsBanner from "./BenefitBanner";
import MobileBottomNav from "./MobileBottomNav";
import { user, spotlightBook, popularBooks, themes, authors } from "./homeData";

/*
  BACKEND API:
  1. GET /api/user/profile        -> user
  2. GET /api/books/spotlight     -> spotlightBook
  3. GET /api/user/active-reading -> (بخش Active Reading — هنوز ساخته نشده)
  4. GET /api/categories          -> themes
  5. GET /api/books?type=popular  -> popularBooks
  6. GET /api/authors/featured    -> authors
*/
export const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-[#FBF9F5] text-[#1A202C] pb-20 md:pb-12"
      dir="ltr"
    >
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 md:px-8 space-y-8 md:space-y-12 pt-2 md:pt-6">
        <MobileGreeting name={user.name} streakDays={user.streakDays} />
        <HeroBanner name={user.name} spotlightBook={spotlightBook} />
        <MobileSpotlightCard book={spotlightBook} />

        {/* TODO: <ActiveReading /> */}

        <PopularBooks books={popularBooks} />
        <BrowseThemes themes={themes} />
        <MasterCurators authors={authors} />
        <BenefitsBanner />
      </main>

      <MobileBottomNav />
    </div>
  );
};
