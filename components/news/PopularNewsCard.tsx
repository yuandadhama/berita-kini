import Image from "next/image";

const PopularNewsCard = ({ item, index }: any) => {
  return (
    <div className="flex gap-4 py-4 lg:px-6">
      {/* IMAGE */}
      <div className="relative aspect-square w-25 shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="rounded-lg object-cover"
        />

        <div className="absolute -top-2 -left-2 flex h-7 w-7 items-center justify-center rounded-full bg-dark-800 text-xs font-bold text-white">
          {index + 1}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-2">
        {/* TITLE (3 lines max) */}
        <h3 className="line-clamp-3 text-base font-semibold leading-snug text-text-primary">
          {item.title}
        </h3>

        {/* META */}
        <div className="flex items-center gap-3 text-sm">
          <p className="font-medium text-brand">{item.category}</p>

          <span className="h-1 w-1 rounded-full bg-[#D9D9D9]" />

          <p className="text-text-secondary">{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularNewsCard;
