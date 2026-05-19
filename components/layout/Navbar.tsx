"use client";

import Link from "next/link";
import Logo from "../ui/icons/Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Terbaru", href: "/terbaru" },
  { label: "Hiburan", href: "/hiburan" },
  { label: "Gaya Hidup", href: "/gaya-hidup" },
  { label: "Nasional", href: "/nasional" },
  { label: "Internasional", href: "/internasional" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#F2F2F2] transition-all duration-300 ${
        scrolled ? "bg-brand shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-14 py-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo color={scrolled ? "var(--white)" : "var(--brand)"} />
          <p
            className={`text-[20px] font-semibold font-poppins transition-colors duration-300 ${
              scrolled ? "text-white" : "text-dark-800"
            }`}
          >
            Berita Kini
          </p>
        </div>

        {/* Nav Items */}
        <ul className="flex gap-8 text-body-medium font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-all duration-300 relative ${
                    scrolled
                      ? isActive
                        ? "text-white font-semibold"
                        : "text-invert hover:text-white"
                      : isActive
                        ? "text-brand font-semibold"
                        : "text-gray-3 hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
