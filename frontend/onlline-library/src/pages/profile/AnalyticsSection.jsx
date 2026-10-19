import VelocityChart from "./VelocityChart";
import ThematicDistribution from "./ThematicDistribution";

export default function AnalyticsSection({ range, onRange, series }) {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 lg:pt-4">
      <VelocityChart range={range} onRange={onRange} series={series} />
      <ThematicDistribution />
    </section>
  );
}
