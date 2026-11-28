import React from "react";
import FilterContent from "./FilterContent";

export default function FilterSidebar(props) {
  return (
    <aside aria-label="Filter sidebar" className="filter-sidebar">
      <FilterContent {...props} />
    </aside>
  );
}
