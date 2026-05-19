import HomeLogo from "@/components/ui/icons/HomeLogo";
import RightChevron from "@/components/ui/icons/RightChevron";
import Link from "next/link";
import beritaPolitik from "../../../public/berita-politik.png";
import Image from "next/image";
import PopularNewsCard from "@/components/news/PopularNewsCard";
import CommentSection from "@/components/layout/CommentSection";
import RelatedNews from "@/components/layout/RelatedNews";

const isiBerita = `Jakarta, CNN Indonesia --Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas  Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila  lolos ke putaran ketiga Kualifikasi Piala Dunia 2026. Akhir-akhir ini rumput lapangan Stadion GBK yang jadi markas Indonesia  dalam babak kedua Kualifikasi Piala Dunia 2026 kerap bermasalah. Pada pertandingan kandang pertama melawan Vietnam, Maret lalu, rumput  GBK rusak parah. PPKGBK selalu pengelola pun mendapat kritik deras.

            Acara-acara di luar  sepak bola itu kerap membuat kondisi rumput tidak sehat dan tidak  terlihat bagus saat pertandingan, khususnya laga Timnas Indonesia. Sampai saat melawan Irak, rumput GBK tidak terlihat sempurna meskipun  kondisinya lebih bagus dibanding lawan Vietnam. Opsi pindah kandang pun  muncul.

            "Nanti kami akan  sampaikan [rencana pindah dari GBK]," ujar Sumardji saat ditanya  kemungkinan menggunakan stadion lain di putaran ketiga kualifikasi. Sumardji tidak membantah kondisi rumput GBK yang masih kurang bagus  dalam duel Indonesia vs Irak. PSSI pun berharap PPKGBK bisa lebih  memperhatikan kondisi rumput untuk pertandingan Skuad Garuda. "Kami sampai saat ini sudah telepon dengan pengelola GBK karena kondisi  rumput kemarin kurang bagus, kami memohon ke pihak GBK supaya  betul-betul disiapkan dan diperhatikan kondisi rumput," tutur Sumardji. "Kalau dilihat-lihat sepertinya kondisi rumput GBK kayaknya stres itu,  sehingga dengan kondisi itu akan memengaruhi, tadi saya telepon supaya  diperhatikan," kata Sumardji menambahkan.`;

const popularNews = [
  {
    id: 1,
    title:
      "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
    category: "Politik",
    date: "22 Januari 2024",
    image: beritaPolitik,
  },
  {
    id: 2,
    title:
      "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
    category: "Politik",
    date: "22 Januari 2024",
    image: beritaPolitik,
  },
  {
    id: 3,
    title:
      "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
    category: "Politik",
    date: "22 Januari 2024",
    image: beritaPolitik,
  },
];

const page = () => {
  return (
    <div className="container mx-auto px-5 lg:px-10 mt-40 mb-40">
      <div className="flex gap-3 items-center mb-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-3 hover:text-gray-5 transition-colors"
        >
          <HomeLogo />
          <span>Beranda</span>
        </Link>
        <RightChevron color="var(--icon-primary)" />
        <Link
          href="/"
          className="text-sm text-gray-3 hover:text-gray-5 transition-colors"
        >
          Kategori
        </Link>
        <RightChevron color="var(--icon-primary)" />
        <Link
          href="/"
          className="text-sm text-gray-3 hover:text-gray-5 transition-colors"
        >
          Detail
        </Link>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex-2 pr-8">
          {/* JUDUL BERITA  */}
          <h1 className="text-4xl font-bold text-text-primary mb-10">
            Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing
            Session di RSUD Dr. Soetomo
          </h1>

          {/* META  */}
          <div className="flex items-center gap-3 text-sm mb-10">
            <p className="font-medium text-brand">Politik</p>

            <span className="h-1 w-1 rounded-full bg-[#D9D9D9]" />

            <p className="text-text-secondary">20 Maret 2023</p>
          </div>

          {/* GAMBAR BERITA */}
          <div className="mt-6">
            <Image
              width={400}
              height={300}
              src={beritaPolitik}
              alt="News Image"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* SUB TITLE  */}
          <p className="text-tetriary text-sm-medium mt-2">
            Rumput GBK tidak kunjung bagus, Timnas Indonesia bisa pindah
            kandang. (CNN Indonesia/Adhi Wicaksono)
          </p>

          {/* ISI BERITA  */}
          <p className="text-text-secondary text-md-medium mt-16 whitespace-pre-line">
            {isiBerita}
          </p>

          <CommentSection />

          <RelatedNews />
        </div>

        <div className="flex-1">
          <h2 className="flex items-center gap-2 font-nunito-sans text-2xl font-bold text-text-primary">
            <span className="inline-block h-6 w-1 rounded-full bg-brand" />
            Berita Terpopuler
          </h2>

          <div className="mt-10 grid gap-6  lg:divide-y lg:divide-[#E0E0E0]">
            {popularNews.map((item, index) => (
              <PopularNewsCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
