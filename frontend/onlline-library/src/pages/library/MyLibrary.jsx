import LibraryHeader from "./LibraryHeader";
import StatsRow from "./StatsRow";
import LibraryTabs from "./LibraryTabs";
import CurrentlyReading from "./CurrentlyReading";
import CompletedRecently from "./CompletedRecently";
import IlluminatedMarginalia from "./IlluminatedMarginalia";

export default function MyLibrary() {
  return (
    <div className="min-h-screen bg-paper font-sans text-leaf-950">
      <main className="mx-auto flex max-w-[1440px] flex-col gap-10 px-12 py-10">
        <div className="space-y-6">
          <LibraryHeader />
          <StatsRow />
        </div>

        <div className="space-y-6">
          <LibraryTabs />
          <CurrentlyReading />
        </div>

        <div className="grid grid-cols-2 items-start gap-10">
          <CompletedRecently />
          <IlluminatedMarginalia />
        </div>
      </main>
    </div>
  );
}
