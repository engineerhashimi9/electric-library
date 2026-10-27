import MobileGreeting from "./MobileGreeting";
import HeroBanner from "./Herobanner";
import MobileSpotlightCard from "./MobileSpotlightCard";
import PopularBooks from "./PopularBooks";
import BrowseThemes from "./BrowseThemes";
import MasterCurators from "./Mastercurators";
import BenefitsBanner from "./BenefitBanner";
import { user, spotlightBook, popularBooks, themes, authors } from "./homeData";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F4FAFA] text-[#0A2E2C] pb-24 md:pb-12">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 md:space-y-12 pt-4 md:pt-6">
        <MobileGreeting name={user.name} streakDays={user.streakDays} />
        <HeroBanner name={user.name} spotlightBook={spotlightBook} />
        <MobileSpotlightCard book={spotlightBook} />
        <PopularBooks books={popularBooks} />
        <BrowseThemes themes={themes} />
        <MasterCurators authors={authors} />
        <BenefitsBanner />
      </main>
    </div>
  );
};