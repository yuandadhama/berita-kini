import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import beritaBola from "../public/berita-bola.png";
import PopularNewsCard from "@/components/news/PopularNewsCard";
import RecommendationCard from "@/components/news/RecommendationCard";
import PromoCarousel from "@/components/layout/PromoCarousel";

const popularNews = [
  {
    id: 1,
    title:
      "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
    category: "Politik",
    date: "22 Januari 2024",
    image: beritaBola,
  },
  {
    id: 2,
    title:
      "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
    category: "Politik",
    date: "22 Januari 2024",
    image: beritaBola,
  },
  {
    id: 3,
    title:
      "Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?",
    category: "Politik",
    date: "22 Januari 2024",
    image: beritaBola,
  },
];

// Tambahkan data rekomendasi (letakkan di atas komponen HomePage)
const recommendationNews = [
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
  {
    id: 4,
    title: "Bank Jatim Gilis Ramadan Vaganza Negeri Dikota Bekang Selyaken",
    category: "Nasional",
    date: "22 Jan 2024",
    image: "/berita-bola.png",
  },
  {
    id: 5,
    title:
      "PLN Sukses Lakukan Pemeriharaan Off 2 Tahunan PLTD GTSTTL 2000kV Mataram",
    category: "Nasional",
    date: "22 Jan 2024",
    image: "/berita-bola.png",
  },
  {
    id: 6,
    title:
      "Berita Persiahaman di Indonesia, Professi IYS Ciptakan Rislem Ambisius",
    category: "Nasional",
    date: "22 Jan 2024",
    image: "/berita-bola.png",
  },
  {
    id: 7,
    title: "BKD Jatim Bersama BNI Gelar 'Tes Karkoba Bagi Pegawai Non ASN",
    category: "Nasional",
    date: "22 Jan 2024",
    image: "/berita-bola.png",
  },
  {
    id: 8,
    title: "Bank Indonesia Prediksi Ekonomi Jatim 2024 Tumbuh Lebih Tinggi",
    category: "Nasional",
    date: "22 Jan 2024",
    image: "/berita-bola.png",
  },
];

const HomePage = () => {
  return (
    <main className="container mx-auto px-5 lg:px-10">
      {/* HERO SECTION */}
      <HeroSection />

      {/* BERITA TERPOPULER */}

      <section>
        <h2 className="mt-16 flex items-center gap-2 font-nunito-sans text-2xl font-bold text-text-primary">
          <span className="inline-block h-6 w-1 rounded-full bg-brand" />
          Berita Terpopuler
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:divide-x lg:divide-[#E0E0E0]">
          {popularNews.map((item, index) => (
            <PopularNewsCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-nunito-sans text-2xl font-bold text-text-primary">
            <span className="inline-block h-6 w-1 rounded-full bg-brand" />
            Rekomendasi Untuk Anda
          </h2>

          <div className="relative">
            <input
              type="text"
              placeholder="Cari disini..."
              className="w-70 rounded-lg border border-[#E0E0E0] py-2 pl-4 pr-10 text-sm placeholder:text-[#BDBDBD] focus:border-brand focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="#BDBDBD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 19L14.65 14.65"
                  stroke="#BDBDBD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {recommendationNews.map((item) => (
            <RecommendationCard key={item.id} item={item} />
          ))}
        </div>
        {/* PAGINATION */}
        <div className="mt-10 flex items-center justify-between">
          {/* Showing results - kiri */}
          <p className="text-sm text-text-secondary">
            Showing 1 to 12 of 97 results
          </p>

          {/* Pagination - kanan */}
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm text-text-secondary hover:text-brand">
              ← Previous
            </button>

            <button className="rounded bg-brand px-3 py-1 text-sm font-medium text-white">
              1
            </button>
            <button className="px-3 py-1 text-sm text-text-secondary hover:text-brand">
              2
            </button>
            <button className="px-3 py-1 text-sm text-text-secondary hover:text-brand">
              ...
            </button>
            <button className="px-3 py-1 text-sm text-text-secondary hover:text-brand">
              6
            </button>
            <button className="px-3 py-1 text-sm text-text-secondary hover:text-brand">
              9
            </button>

            <button className="px-3 py-1 text-sm text-text-secondary hover:text-brand">
              Next →
            </button>
          </div>
        </div>
      </section>

      <PromoCarousel />
    </main>
  );
};

export default HomePage;
