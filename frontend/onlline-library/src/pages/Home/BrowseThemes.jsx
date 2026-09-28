import ThemeCard from "./ThemeCard";

export default function BrowseThemes({ themes }) {
  return (
    <div className="hidden md:block">
      <div className="flex justify-between">
        <span className="text-[#9A4522] text-[10px]">CLASSIFICATION</span>
    
        <span className="text-[10px] text-[#1E3A2F]">
          6 Comprehensive Archives
        </span>
      </div>
      <h3 className="text-[28px]">Browse Themes & Disciplines</h3>
      <div className="flex flex-wrap gap-4">
        {themes.map((t) => (
          <ThemeCard key={t.name} theme={t} />
        ))}
      </div>
    </div>
  );
}
