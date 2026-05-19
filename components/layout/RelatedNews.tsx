import PopularNewsCard from "../news/PopularNewsCard";

const uri = "https://berita-indo-api-next.vercel.app/api/antara-news/top-news";

const RelatedNews = async () => {
  const response = await fetch(uri, { next: { revalidate: 3600 } });
  const { data } = await response.json();

  const relatedNews = data.slice(0, 3);

  return (
    <div className="mt-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center gap-2 font-nunito-sans text-2xl font-bold text-text-primary">
          <span className="inline-block h-6 w-1 rounded-full bg-brand" />
          Berita Terkait
        </h2>
        <button className="px-4 py-1.5 rounded-lg border border-brand text-brand text-sm font-medium cursor-pointer hover:bg-brand hover:text-white transition-colors">
          Lihat Semua
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedNews.map((item: any, index: number) => (
          <PopularNewsCard key={item.link} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;
