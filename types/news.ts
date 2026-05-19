// types/news.ts

export interface NewsItem {
  id: string;
  title: string;
  link: string;
  category: string;
  date: string;
  image: string;
}

// ─── Normalizers ─────────────────────────────────────────────────────────────

function formatDate(isoDate: string): string {
  if (!isoDate) return "";
  return new Date(isoDate).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function normalizeRepublika(item: any, index: number): NewsItem {
  return {
    id: `republika-${index}-${item.link}`,
    title: item.title ?? "",
    link: item.link ?? "/",
    category: item.categories?.[0] ?? "Umum",
    date: formatDate(item.isoDate),
    image: item.image?.small ?? "",
  };
}

export function normalizeOkezone(item: any, index: number): NewsItem {
  const rawImage =
    item.image?.large ?? item.image?.medium ?? item.image?.small ?? "";
  const image = rawImage.startsWith("http") ? rawImage : "";

  return {
    id: `okezone-${index}-${item.link}`,
    title: item.title ?? "",
    link: item.link ?? "/",
    category: item.categories?.[0] ?? "Umum",
    date: formatDate(item.isoDate),
    image,
  };
}
