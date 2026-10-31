import LibraryHeader from "./LibraryHeader";
import StatsRow from "./StatsRow";
import LibraryTabs from "./LibraryTabs";
import CurrentlyReading from "./CurrentlyReading";
import CompletedRecently from "./CompletedRecently";
import IlluminatedMarginalia from "./IlluminatedMarginalia";

export default function MyLibrary() {
  return (
    <div className="min-h-screen bg-[#F4FAFA] font-sans text-[#0A2E2C] pb-24 md:pb-12">
      <main className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:gap-10 px-4 sm:px-8 lg:px-12 py-6 sm:py-10">
        <div className="space-y-6">
          <LibraryHeader />
          <StatsRow />
        </div>
        <div className="space-y-6">
          <LibraryTabs />
          <CurrentlyReading />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-10">
          <CompletedRecently />
          <IlluminatedMarginalia />
        </div>
      </main>
    </div>
  );
}