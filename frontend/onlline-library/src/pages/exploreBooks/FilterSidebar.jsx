import { FilterContent } from "./FilterContent";

export default function FilterSidebar(props) {
  return (
    <aside className="hidden self-stretch rounded-3xl bg-[#FFFFFF] border border-[#D0E8E6] p-6 shadow-sm lg:block">
      <FilterContent {...props} />
    </aside>
  );
}
