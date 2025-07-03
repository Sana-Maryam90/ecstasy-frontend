"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="relative">
      {/* Navbar Menu */}
      <nav className="fixed top-5 left-[5%] w-[90%] flex justify-between items-center font-poppins text-base py-4 z-40">
        <div className="flex gap-8 items-center">
          <Link href="/">Home</Link>

          {/* Shop Dropdown */}
          <div className="relative flex items-center">
            <button onClick={toggleDropdown} className="flex items-center gap-1">
              <span>Shop</span>
              <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-md mt-2 w-32 z-10">
                <Link href="/products" className="block px-4 py-2 hover:bg-gray-100">Notebooks</Link>
                <Link href="/products" className="block px-4 py-2 hover:bg-gray-100">Notepads</Link>
                <Link href="/products" className="block px-4 py-2 hover:bg-gray-100">Sketchbooks</Link>
              </div>
            )}
          </div>

          <Link href="/about">About</Link>
        </div>

        <div className="flex gap-6 items-center">
          <Search size={20} />
          <div className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-white/70 rounded-full w-6 h-6 text-center text-sm">0</span>
          </div>
        </div>
      </nav>

      {/* Logo */}
      <p
        className={`fixed left-1/2 -translate-x-1/2 font-grandstander z-50 text-center transition-all duration-300 ${
          isScrolled ? "top-8 text-[2rem]" : "top-[10%] text-[4rem]"
        }`}
      >
        Ecstasy.
      </p>
    </header>
  );
};

export default Navbar;
