import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types/news";

const RecommendationCard = ({ item }: { item: NewsItem }) => {
  return (
    <Link href={item.link} target="_blank" rel="noopener noreferrer">
      <article className="group cursor-pointer">
        {/* IMAGE */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#F5F5F5]">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="10"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[#BDBDBD]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="8.5"
                  cy="8.5"
                  r="1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M21 15l-5-5L5 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}
        </div>

        {/* TITLE */}
        <h3 className="mt-3 font-nunito-sans text-base font-bold leading-snug text-text-primary line-clamp-2 group-hover:text-brand transition-colors">
          {item.title}
        </h3>

        {/* META */}
        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="font-medium text-brand">{item.category}</span>
          <span className="text-[#BDBDBD]">•</span>
          <span className="text-text-secondary">{item.date}</span>
        </div>
      </article>
    </Link>
  );
};

export default RecommendationCard;
