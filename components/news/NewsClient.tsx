"use client";

import { useState, useMemo } from "react";
import { NewsItem } from "@/types/news";
import NewsCard from "@/components/news/NewsCard";

const PAGE_SIZE = 8;

const NewsClient = ({
  allNews,
  title,
}: {
  allNews: NewsItem[];
  title: string;
}) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allNews;
    return allNews.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q),
    );
  }, [allNews, query]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSearch = (value: string) => {
    setQuery(value);
    setPage(1); // reset to first page on new search
  };

  const getPageNumbers = () => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (page <= 3) return [1, 2, 3, "...", totalPages];
    if (page >= totalPages - 2)
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", page - 1, page, page + 1, "...", totalPages];
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-nunito-sans text-2xl font-bold text-text-primary">
          <span className="inline-block h-6 w-1 rounded-full bg-brand" />
          {title}
        </h2>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Cari disini..."
            className="w-70 rounded-lg border border-[#E0E0E0] py-2 pl-4 pr-10 text-sm placeholder:text-[#BDBDBD] focus:border-brand focus:outline-none"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 19L14.65 14.65"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {paginated.length > 0 ? (
          paginated.map((item) => <NewsCard key={item.id} item={item} />)
        ) : (
          <p className="col-span-4 text-center text-text-secondary py-10">
            Tidak ada berita yang cocok dengan pencarian &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-between">
          {/* Info */}
          <p className="text-sm text-text-secondary">
            Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)} to{" "}
            {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}{" "}
            results
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 text-sm text-text-secondary hover:text-brand disabled:opacity-30 transition-colors cursor-pointer"
            >
              ← Previous
            </button>

            {getPageNumbers().map((p, i) =>
              p === "..." ? (
                <span
                  key={`ellipsis-${i}`}
                  className="px-2 text-text-secondary"
                >
                  ...
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(Number(p))}
                  className={`min-w-8 rounded px-3 py-1 text-sm font-medium transition-colors cursor-pointer ${
                    p === page
                      ? "bg-brand text-white"
                      : "text-text-secondary hover:text-brand"
                  }`}
                >
                  {p}
                </button>
              ),
            )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 text-sm text-text-secondary hover:text-brand disabled:opacity-30 transition-colors cursor-pointer"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsClient;
