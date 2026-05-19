import { normalizeRepublika, normalizeOkezone, NewsItem } from "@/types/news";
import { scrapeOgImage } from "@/lib/scrapeOgImage";
import NewsClient from "@/components/news/NewsClient";

const REPUBLIKA_URL =
  "https://berita-indo-api-next.vercel.app/api/republika-news";
const OKEZONE_URL = "https://berita-indo-api-next.vercel.app/api/okezone-news";

const RecommendationNewsSection = async () => {
  // Fetch both APIs in parallel
  const [republikaRes, okezoneRes] = await Promise.allSettled([
    fetch(REPUBLIKA_URL, { next: { revalidate: 3600 } }),
    fetch(OKEZONE_URL, { next: { revalidate: 3600 } }),
  ]);

  const republikaData =
    republikaRes.status === "fulfilled" && republikaRes.value.ok
      ? ((await republikaRes.value.json()).data ?? [])
      : [];

  const okezoneData =
    okezoneRes.status === "fulfilled" && okezoneRes.value.ok
      ? ((await okezoneRes.value.json()).data ?? [])
      : [];

  // Normalize Republika (images already valid URLs)
  const republikaNews: NewsItem[] = republikaData
    .map(normalizeRepublika)
    .filter((n: NewsItem) => n.title);

  // Normalize Okezone then scrape og:image in parallel
  const okezoneNormalized: NewsItem[] = okezoneData
    .map(normalizeOkezone)
    .filter((n: NewsItem) => n.title);

  const okezoneWithImages: NewsItem[] = await Promise.all(
    okezoneNormalized.map(async (item) => {
      if (item.image) return item;
      const ogImage = await scrapeOgImage(item.link);
      return { ...item, image: ogImage };
    }),
  );

  const allNews: NewsItem[] = [...republikaNews, ...okezoneWithImages];

  return (
    <section className="mt-16">
      <NewsClient allNews={allNews} title="Rekomendasi Untuk Anda" />
    </section>
  );
};

export default RecommendationNewsSection;
