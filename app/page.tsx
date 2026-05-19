import HeroSection from "@/components/layout/HeroSection";
import PromoCarousel from "@/components/layout/PromoCarousel";
import PopularNewsSection from "@/components/sections/PopularNewsSection";
import RecommendationNewsSection from "@/components/sections/RecommendationNewsSection";

const HomePage = () => {
  return (
    <main className="container mx-auto px-5 lg:px-10">
      {/* HERO SECTION */}
      <HeroSection />

      {/* BERITA TERPOPULER */}
      <PopularNewsSection />

      {/* REKOMENDASI BERITA  */}
      <RecommendationNewsSection />

      <PromoCarousel />
    </main>
  );
};

export default HomePage;
