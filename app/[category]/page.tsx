import NewsClient from "@/components/news/NewsClient";
import { NewsItem } from "@/types/news";

const URI_CNN = "https://berita-indo-api-next.vercel.app/api/cnn-news/";
const URI_TERBARU =
  "https://berita-indo-api-next.vercel.app/api/antara-news/terkini";

function normalizeCnn(item: any, index: number): NewsItem {
  return {
    id: `cnn-${index}-${item.link}`,
    title: item.title ?? "",
    link: item.link ?? "/",
    category: item.category ?? "",
    date: item.isoDate
      ? new Date(item.isoDate).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "",
    image: item.image?.large ?? item.image?.small ?? "",
  };
}

function normalizeAntara(item: any, index: number): NewsItem {
  return {
    id: `antara-${index}-${item.link}`,
    title: item.title ?? "",
    link: item.link ?? "/",
    category: "Terbaru",
    date: item.isoDate
      ? new Date(item.isoDate).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "",
    image: typeof item.image === "string" ? item.image : "",
  };
}

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  const isTerbaru = category === "terbaru";
  const url = isTerbaru ? URI_TERBARU : URI_CNN + category;

  const response = await fetch(url, { next: { revalidate: 3600 } });

  if (!response.ok) {
    return (
      <div className="container mx-auto px-5 lg:px-10 mt-40 mb-40">
        <p className="text-text-secondary">
          Gagal memuat berita. Coba lagi nanti.
        </p>
      </div>
    );
  }

  const { data } = await response.json();

  const allNews: NewsItem[] = (data ?? [])
    .map(isTerbaru ? normalizeAntara : normalizeCnn)
    .filter((n: NewsItem) => n.title);

  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="container mx-auto px-5 lg:px-10 mt-40 mb-40">
      <NewsClient allNews={allNews} title={capitalizedCategory} />
    </div>
  );
};

export default CategoryPage;
