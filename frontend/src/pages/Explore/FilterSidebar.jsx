import { FilterContent } from "./FilterContent";

export default function FilterSidebar(props) {
  return (
    <aside
      aria-label="Filter sidebar"
      className="hidden self-stretch rounded-3xl bg-[#FFFFFF] border border-[#D0E8E6] p-6 shadow-library-sm lg:block"
    >
      <FilterContent {...props} />
    </aside>
  );
}
