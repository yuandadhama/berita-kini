import RecommendationCard from "@/components/news/RecommendationCard";
import beritaPolitik from "../../../public/berita-politik.png";

// const relatedNews = [
//   {
//     id: 1,
//     title:
//       "Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr. S...",
//     category: "Nasional",
//     date: "22 Jan 2024",
//     image: beritaPolitik,
//   },
//   {
//     id: 2,
//     title:
//       "Flypass Bonanza dan Heli Bell 505 Warnai Tupdik dan Wing Day 11 Perwira Penerbang TNI...",
//     category: "Nasional",
//     date: "22 Jan 2024",
//     image: beritaPolitik,
//   },
//   {
//     id: 3,
//     title:
//       "Perwira Penerbangan TNI AL Raih Gelar 'Double Degree' di PSL Université Paris",
//     category: "Nasional",
//     date: "22 Jan 2024",
//     image: beritaPolitik,
//   },
// ];

const relatedNews = [
  {
    id: 1,
    title:
      "Plt Gubernur Adhy Tetaskan Pelayanan Berkualitas saat Olahraga Berkelas Internasional",
    category: "Nasional",
    date: "22 Jan 2024",
    image: "/berita-bola.png",
  },
  {
    id: 2,
    title:
      "Flypass Bonanza dan Hell Bali 505 Warnai Tumplik dan Wing Day 11 Penerba Puantara 33",
    category: "Nasional",
    date: "22 Jan 2024",
    image: "/berita-bola.png",
  },
  {
    id: 3,
    title:
      "Peraera Penerbangan TNI AL Raih Gelar 'Double Degree' di PSL Universite Paris",
    category: "Nasional",
    date: "22 Jan 2024",
    image: "/berita-bola.png",
  },
  // {
  //   id: 4,
  //   title: "Bank Jatim Gilis Ramadan Vaganza Negeri Dikota Bekang Selyaken",
  //   category: "Nasional",
  //   date: "22 Jan 2024",
  //   image: "/berita-bola.png",
  // },
  // {
  //   id: 5,
  //   title:
  //     "PLN Sukses Lakukan Pemeriharaan Off 2 Tahunan PLTD GTSTTL 2000kV Mataram",
  //   category: "Nasional",
  //   date: "22 Jan 2024",
  //   image: "/berita-bola.png",
  // },
  // {
  //   id: 6,
  //   title:
  //     "Berita Persiahaman di Indonesia, Professi IYS Ciptakan Rislem Ambisius",
  //   category: "Nasional",
  //   date: "22 Jan 2024",
  //   image: "/berita-bola.png",
  // },
  // {
  //   id: 7,
  //   title: "BKD Jatim Bersama BNI Gelar 'Tes Karkoba Bagi Pegawai Non ASN",
  //   category: "Nasional",
  //   date: "22 Jan 2024",
  //   image: "/berita-bola.png",
  // },
  // {
  //   id: 8,
  //   title: "Bank Indonesia Prediksi Ekonomi Jatim 2024 Tumbuh Lebih Tinggi",
  //   category: "Nasional",
  //   date: "22 Jan 2024",
  //   image: "/berita-bola.png",
  // },
];

const RelatedNews = () => {
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
        {relatedNews.map((item) => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;
