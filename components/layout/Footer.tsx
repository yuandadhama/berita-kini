import Link from "next/link";
import FacebookLogo from "../ui/icons/footer/FacebookLogo";
import InstagramLogo from "../ui/icons/footer/InstagramLogo";
import YoutubeLogo from "../ui/icons/footer/YoutubeLogo";
import Logo from "../ui/icons/Logo";
import PaperPlaneLogo from "../ui/icons/footer/PaperPlaneLogo";

const Footer = () => {
  return (
    <footer className="text-white bg-dark-800 ">
      <div className="container py-10 px-6 flex items-start justify-around mx-auto gap-4">
        <div>
          <div className="flex items-center gap-5">
            <Logo color="var(--white)" width={60} height={60} />
            <p className="font-poppins text-[30px] font-semibold">
              Berita Kini
            </p>
          </div>
          <p className="text-sm text-invert mt-4">
            © 2023 Berita Kini. All rights reserved.
          </p>
          <p className="text-lg-semibold mt-10">Ikuti Kami</p>
          <div className="flex gap-4 mt-4">
            <YoutubeLogo />
            <InstagramLogo />
            <FacebookLogo />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="font-nunito-sans font-semibold text-xl">Telusuri</h6>
          <Link
            href="/"
            className="text-invert transition-colors hover:text-white mt-4"
          >
            Beranda
          </Link>
          <Link
            href="/kesehatan"
            className="text-invert transition-colors hover:text-white"
          >
            Kesehatan
          </Link>
          <Link
            href="/otomotif"
            className="text-invert transition-colors hover:text-white"
          >
            Otomotif
          </Link>
          <Link
            href="/politik"
            className="text-invert transition-colors hover:text-white"
          >
            Politik
          </Link>
          <Link
            href="/olahraga"
            className="text-invert transition-colors hover:text-white"
          >
            Olahraga
          </Link>
          <Link
            href="/nasional"
            className="text-invert transition-colors hover:text-white"
          >
            Nasional
          </Link>
          <Link
            href="/internasional"
            className="text-invert transition-colors hover:text-white"
          >
            Internasional
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="font-nunito-sans font-semibold text-xl">Bantuan</h6>
          <Link
            href="/"
            className="text-invert transition-colors hover:text-white mt-4"
          >
            Kontak Kami
          </Link>
          <Link
            href="/"
            className="text-invert transition-colors hover:text-white"
          >
            Laporan Pembajakan
          </Link>
          <Link
            href="/"
            className="text-invert transition-colors hover:text-white"
          >
            Kebijakan
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-nunito-sans font-semibold text-xl">
            Berlangganan Berita Terbaru
          </h6>
          <div className="bg-white w-90 rounded p-2 flex justify-between">
            <input
              type="email"
              placeholder="Masukkan email"
              className="w-fulltext-sm text-gray-700 focus:outline-none"
            />
            <PaperPlaneLogo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
