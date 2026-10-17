import { useMemo, useState } from "react";
import { authors } from "@/pages/author/authors";

export const PER_PAGE = 8;

export default function useAuthors() {
  const [query, setQueryState] = useState("");
  const [category, setCategoryState] = useState("All Authors");
  const [sort, setSortState] = useState("Most Works");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const [followed, setFollowed] = useState([2, 8]); // مقدار اولیهٔ نمونه

  // هر تغییر در فیلتر، صفحه را به ۱ برمی‌گرداند
  const setQuery = (v) => { setQueryState(v); setPage(1); };
  const setCategory = (v) => { setCategoryState(v); setPage(1); };
  const setSort = (v) => { setSortState(v); setPage(1); };

  const toggleFollow = (id) =>
    setFollowed((list) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]));

  const resetFilters = () => { setQueryState(""); setCategoryState("All Authors"); setPage(1); };

  const categoryCounts = useMemo(() => {
    const counts = { "All Authors": authors.length };
    authors.forEach((a) => a.categories.forEach((c) => { counts[c] = (counts[c] || 0) + 1; }));
    return counts;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = authors.filter((a) => {
      const okQuery = !q || a.name.toLowerCase().includes(q) || a.role.toLowerCase().includes(q) || a.bio.toLowerCase().includes(q);
      const okCategory = category === "All Authors" || a.categories.includes(category);
      return okQuery && okCategory;
    });
    if (sort === "Most Works") list = [...list].sort((a, b) => b.works - a.works);
    if (sort === "Most Followed") list = [...list].sort((a, b) => b.followers - a.followers);
    if (sort === "Name A–Z") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [query, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  return {
    query, setQuery,
    category, setCategory, categoryCounts,
    sort, setSort,
    view, setView,
    page: safePage, setPage, totalPages,
    followed, toggleFollow,
    filtered, visible, resetFilters,
    featured: [...authors].sort((a, b) => b.followers - a.followers)[0],
  };
}
