import { useAuth } from "@/hooks/useAuth";
import MobileGreeting from "./MobileGreeting";
import HeroBanner from "./Herobanner";
import MobileSpotlightCard from "./MobileSpotlightCard";
import PopularBooks from "./PopularBooks";
import BrowseThemes from "./BrowseThemes";
import MasterCurators from "./Mastercurators";
import BenefitsBanner from "./BenefitBanner";
import { user as defaultUser, spotlightBook, popularBooks, themes, authors } from "./homeData";

/**
 * HomePage
 * Main landing page that puts all home sections together in order.
 */
export function HomePage() {
  // Get logged-in user info
  const { user } = useAuth();
  const displayName = user?.name || "";

  return (
    /* Outer page background wrapper */
    <div className="min-h-screen bg-[#F4FAFA] text-[#0A2E2C] pb-24 md:pb-16 transition-colors">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 md:space-y-16 pt-4 sm:pt-6 md:pt-8">
        {/* 1. Mobile greeting header (shown only on small screens) */}
        <MobileGreeting name={displayName} streakDays={defaultUser.streakDays} />

        {/* 2. Desktop hero banner + spotlight book card */}
        <HeroBanner name={displayName} spotlightBook={spotlightBook} />

        {/* 3. Mobile spotlight book card (shown only on small screens) */}
        <MobileSpotlightCard book={spotlightBook} />

        {/* 4. Popular books grid */}
        <PopularBooks books={popularBooks} />

        {/* 5. Browse by subject / theme grid */}
        <BrowseThemes themes={themes} />

        {/* 6. Featured authors section */}
        <MasterCurators authors={authors} />

        {/* 7. Membership benefits banner at the bottom */}
        <BenefitsBanner />
      </main>
    </div>
  );
}

export default HomePage;
