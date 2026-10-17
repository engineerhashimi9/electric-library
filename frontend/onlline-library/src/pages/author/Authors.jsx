
import AuthorsHeader from "./AuthorsHeader";
import AuthorSearch from "./AuthorSearch";
import CategoryChips from "./CategoryChips";
import AuthorsToolbar from "./AuthorsToolbar";
import AuthorsGrid from "./AuthorsGrid";
import FeaturedAuthor from "./FeaturedAuthor";
import Pagination from "./Pagination";
import useAuthors from "@/hooks/useAuthors";
import { categories, authors } from "./authors";

export default function Authors() {
  const a = useAuthors();

  return (
    <div className="min-h-screen bg-paper font-sans text-leaf-950">
      <main className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 pt-10">
        <AuthorsHeader
          total={authors.length}
          followedCount={a.followed.length}
        />
        <AuthorSearch value={a.query} onChange={a.setQuery} />
        <CategoryChips
          categories={categories}
          counts={a.categoryCounts}
          active={a.category}
          onChange={a.setCategory}
        />
        <AuthorsToolbar
          shown={a.visible.length}
          total={a.filtered.length}
          sort={a.sort}
          onSort={a.setSort}
          view={a.view}
          onView={a.setView}
        />

        <AuthorsGrid
          authors={a.visible}
          view={a.view}
          followed={a.followed}
          onToggleFollow={a.toggleFollow}
          onReset={a.resetFilters}
        />

        <FeaturedAuthor
          author={a.featured}
          following={a.followed.includes(a.featured.id)}
          onToggleFollow={() => a.toggleFollow(a.featured.id)}
        />

        {a.filtered.length > 0 && (
          <Pagination
            page={a.page}
            totalPages={a.totalPages}
            onPage={a.setPage}
            shown={a.visible.length}
            total={a.filtered.length}
          />
        )}
      </main>
    </div>
  );
}
