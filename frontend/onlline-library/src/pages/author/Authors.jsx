import AuthorsHero from "./AuthorsHero";
import AuthorsToolbar from "./AuthorsToolbar";
import AuthorsGrid from "./AuthorsGrid";
import FeaturedAuthor from "./FeaturedAuthor";
import Pagination from "./Pagination";
import useAuthors, { PER_PAGE } from "@/hooks/useAuthors";
import { categories, authors } from "./authors";

export default function Authors() {
  const a = useAuthors();
  const from = a.filtered.length === 0 ? 0 : (a.page - 1) * PER_PAGE + 1;
  const to = (a.page - 1) * PER_PAGE + a.visible.length;

  return (
    <div className="min-h-screen bg-[#F6FBF9] pb-28 text-[#111C18] lg:pb-0">
      <AuthorsHero
        total={authors.length}
        followedCount={a.followed.length}
        search={{ value: a.query, onChange: a.setQuery }}
        chips={{
          categories,
          counts: a.categoryCounts,
          active: a.category,
          onChange: a.setCategory,
        }}
      />

      <main className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 pb-10 pt-5 md:px-8 lg:gap-8 lg:pb-16 lg:pt-8 xl:px-12">
        <AuthorsToolbar
          shown={a.visible.length}
          total={a.filtered.length}
          sort={a.sort}
          onSort={a.setSort}
          region={a.region}
          onRegion={a.setRegion}
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
            from={from}
            to={to}
            total={a.filtered.length}
          />
        )}
      </main>
    </div>
  );
}
