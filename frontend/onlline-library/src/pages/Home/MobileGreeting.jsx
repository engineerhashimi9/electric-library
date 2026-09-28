export default function MobileGreeting({ name, streakDays }) {
  return (
    <div className="md:hidden space-y-1">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-[#1A202C]">
          Good evening, {name}
        </h1>
        <span className="px-2.5 py-1 bg-[#FDF0EC] text-[#C86D51] text-[11px] font-medium rounded-full flex items-center gap-1">
          🔥 {streakDays}-Day Streak
        </span>
      </div>
      <p className="text-xs text-[#4A5568]">
        What will inspire your curiosity tonight?
      </p>
    </div>
  );
}
