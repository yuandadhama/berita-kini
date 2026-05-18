import Image from "next/image";
import promotionImage from "../../public/promotion.png";

const PromoCarousel = () => {
  return (
    <div className="flex flex-col gap-5.5 mb-60">
      <div className="flex justify-between items-center bg-secondary-brand rounded-3xl p-12 px-20 mt-30">
        <div className="font-montserrat flex-1 text-white gap-8 flex flex-col">
          <h1 className="heading-1  font-semibold">
            Petualangan Edukatif bersama Malang Mbois City Tour!
          </h1>
          <p className="heading-6">
            Petualangan Edukatif bersama Malang Mbois City Tour!
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={promotionImage}
            alt="Promotion"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="flex gap-4 mx-auto">
        <button className="w-3 h-3 bg-gray-500 rounded-full inline-block cursor-pointer"></button>
        <button className="w-3 h-3 bg-primary rounded-full inline-block cursor-pointer"></button>
        <button className="w-3 h-3 bg-gray-500 rounded-full inline-block cursor-pointer"></button>
      </div>
    </div>
  );
};

export default PromoCarousel;
