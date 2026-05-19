import Image from "next/image";
import Link from "next/link";

interface PopularNewsCardProps {
  item: {
    title: string;
    link: string;
    isoDate: string;
    image: string;
    description: string;
  };
  index: number;
}

const PopularNewsCard = ({ item, index }: PopularNewsCardProps) => {
  const formattedDate = item.isoDate
    ? new Date(item.isoDate).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <Link
      href={item.link}
      target="_blank"
      className="group flex gap-4 px-6 py-6"
    >
      {/* IMAGE + NUMBER BADGE */}
      <div className="relative shrink-0 w-24 h-24">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="rounded-xl object-cover"
        />
        {/* Number badge */}
        <div className="absolute -top-2.5 -left-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#1E1E2D] text-xs font-bold text-white shadow-md">
          {index + 1}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-center gap-2 min-w-0">
        {/* TITLE */}
        <h3 className="line-clamp-3 text-sm font-semibold leading-snug text-text-primary group-hover:text-brand transition-colors duration-200">
          {item.title}
        </h3>

        {/* META */}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-brand">Terpopuler</span>
          <span className="h-1 w-1 rounded-full bg-[#D9D9D9]" />
          <span className="text-text-secondary whitespace-nowrap">
            {formattedDate}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PopularNewsCard;
