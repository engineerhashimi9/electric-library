import StatCard from "./StatCard";
import { stats } from "./profile";

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6 lg:pt-4">
      {stats.map((s) => <StatCard key={s.id} stat={s} />)}
    </section>
  );
}
