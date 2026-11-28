import React from "react";
import MobileGreeting from "./MobileGreeting";
import HeroBanner from "./HeroBanner";
import MobileSpotlightCard from "./MobileSpotlightCard";
import PopularBooks from "./PopularBooks";
import BrowseThemes from "./BrowseThemes";
import MasterCurators from "./MasterCurators";
import BenefitsBanner from "./BenefitBanner";
import { user, spotlightBook, popularBooks, themes, authors } from "./homeData";

export const HomePage = () => {
  return (
    <div className="page-container">
      <main className="content-container home-main">
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

export default HomePage;
