import Link from "next/link";
import Logo from "../ui/icons/Logo";

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 right-0 border-b border-[#F2F2F2] z-50">
      <div className="container mx-auto flex items-center justify-between px-14 py-8">
        <div className="flex items-center gap-3">
          <Logo color="var(--brand)" />
          <p className="text-[20px] font-semibold font-poppins text-dark-800">
            Berita Kini
          </p>
        </div>

        {/* navlist section  */}
        <ul className="flex gap-8 text-gray-3 text-body-medium">
          <li className="text-brand font-semibold">
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <Link href="/terbaru">Terbaru</Link>
          </li>
          <li>
            <Link href="/hiburan">Hiburan</Link>
          </li>
          <li>
            <Link href="/gaya-hidup">Gaya Hidup</Link>
          </li>
          <li>
            <Link href="/nasional">Nasional</Link>
          </li>
          <li>
            <Link href="/internasional">Internasional</Link>
          </li>
        </ul>
      </div>
      {/* logo section  */}
    </nav>
  );
};

export default Navbar;
