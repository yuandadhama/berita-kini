// components/news/RecommendationCard.tsx
import Image from "next/image";

interface RecommendationCardProps {
  item: {
    id: number;
    title: string;
    category: string;
    date: string;
    image: string;
  };
}

const RecommendationCard = ({ item }: RecommendationCardProps) => {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-3 font-nunito-sans text-base font-bold leading-snug text-text-primary line-clamp-2 group-hover:text-brand transition-colors">
        {item.title}
      </h3>

      <div className="mt-2 flex items-center gap-2 text-sm text-text-secondary">
        <span className="font-medium text-brand">{item.category}</span>
        <span className="text-[#BDBDBD]">•</span>
        <span>{item.date}</span>
      </div>
    </article>
  );
};

export default RecommendationCard;
