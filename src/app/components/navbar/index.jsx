"use client";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import Dropdown from "../ui/dropdown";
import CartModal from "../cart/cartModal";
import { useCart } from "@/app/hooks/cartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative">
      <nav className="fixed top-5 left-[5%] w-[90%] flex justify-between items-center font-poppins text-base py-4 z-40">
        <div className="flex gap-8 items-center">
          <Link href="/">Home</Link>

          <Dropdown label={<><span>Shop</span><ChevronDown size={16} /></>}>
            <Link href="/products/notebooks" className="block px-4 py-2 hover:bg-gray-100">Notebooks</Link>
            <Link href="/products/notepads" className="block px-4 py-2 hover:bg-gray-100">Notepads</Link>
            <Link href="/products/sketchbooks" className="block px-4 py-2 hover:bg-gray-100">Sketchbooks</Link>
          </Dropdown>

          <Link href="/about">About</Link>
        </div>

        <div className="flex gap-6 items-center">
          <Search size={20} />
          <button className="relative" onClick={() => setCartOpen(true)}>
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-pinkLight text-black rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Floating Logo */}
      <Link
        href="/"
        className={`fixed left-1/2 -translate-x-1/2 font-grandstander z-50 text-center transition-all duration-300
          ${isScrolled
            ? "top-8 text-[2rem] opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto"
            : "top-[10%] text-[4rem] opacity-100 pointer-events-auto"
          }`}
      >
        Ecstasy.
      </Link>

      <CartModal isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
};

export default Navbar;
