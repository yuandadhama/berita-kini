import CalendarIcon from "@/components/ui/icons/CalendarIcon";
import ArrowUpRight from "@/components/ui/icons/ArrowUpRight";
import LeftChevron from "@/components/ui/icons/LeftChevron";
import RightChevron from "@/components/ui/icons/RightChevron";
import Image from "next/image";

import beritaBola from "../../public/berita-bola.png";

const HeroSection = () => {
  return (
    <section className="mt-40">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* CONTENT */}
        <div className="flex flex-col">
          {/* LABEL */}
          <p className="text-sm font-semibold text-text-secondary">Headline</p>

          {/* TITLE */}
          <h1 className="mt-4 font-nunito-sans text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
            Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3
            Kualifikasi
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-xl text-base leading-7 text-gray-2">
            Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang
            Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK)
            apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
          </p>

          {/* DATE */}
          <div className="mt-6 flex items-center gap-3">
            <CalendarIcon color="var(--icon-secondary)" />

            <span className="text-sm font-medium text-text-secondary">
              22 Januari 2024
            </span>
          </div>

          {/* BUTTON */}
          <button className="group mt-8 flex w-fit items-center gap-2 transition-opacity hover:opacity-80">
            <span className="text-base font-medium text-brand">
              Baca Selengkapnya
            </span>

            <ArrowUpRight color="var(--brand)" />
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative aspect-16/10 overflow-hidden rounded-3xl">
          <Image
            src={beritaBola}
            alt="Berita Bola"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* PAGINATION */}
      <div className="mt-10 flex items-center justify-center gap-4 text-sm text-text-secondary">
        <button className="transition-opacity hover:opacity-70">
          <LeftChevron color="var(--icon-secondary)" />
        </button>
        <span>1</span>
        <span>dari</span>
        <span>5</span>
        <button className="transition-opacity hover:opacity-70">
          <RightChevron color="var(--icon-secondary)" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
