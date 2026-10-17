import {FilterContent} from "./FilterContent";
export function FilterSidebar(props) {
  return (
    <aside className="hidden self-stretch rounded-3xl bg-white p-6 shadow-sm lg:block">
      <FilterContent {...props} />
    </aside>
  );
}
