import PopularNewsCard from "@/components/news/PopularNewsCard";

const uri = "https://berita-indo-api-next.vercel.app/api/antara-news/top-news";

const PopularNewsSection = async () => {
  const response = await fetch(uri, { next: { revalidate: 3600 } });
  const { data } = await response.json();

  const popularNews = data.slice(0, 3);

  return (
    <section>
      <h2 className="mt-16 flex items-center gap-2 font-nunito-sans text-2xl font-bold text-text-primary">
        <span className="inline-block h-6 w-1 rounded-full bg-brand" />
        Berita Terpopuler
      </h2>

      <div className="mt-10 grid gap-0 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E0E0E0]">
        {popularNews.map((item: any, index: number) => (
          <PopularNewsCard key={item.link} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PopularNewsSection;
