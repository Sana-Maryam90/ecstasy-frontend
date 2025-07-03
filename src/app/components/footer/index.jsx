"use client";

import Input from "../ui/input";

const Footer = () => {
  return (
    <footer className="bg-pinkLight text-orange pt-10 px-6 font-poppins">
      <section className="max-w-7xl py-10 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">        
        {/* Logo */}
        <div className="text-4xl sm:text-5xl font-grandstander">Ecstasy.</div>

        {/* Social Links */}
        <div className="flex flex-col gap-1 text-base items-center">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-1 text-base items-center">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* Newsletter */}
        <form className="w-full sm:max-w-[290px] flex flex-col gap-3 mt-4 sm:mt-0">
          <Input type="email" placeholder="Enter your email" />
          <input
            type="submit"
            value="Subscribe"
            className="bg-orange text-white font-medium py-2 px-4 rounded-md cursor-pointer hover:bg-[#e24a34] transition"
          />
        </form>
      </section>

      {/* Footer Bottom */}
      <div className="text-sm font-light text-center mt-6">
        © {new Date().getFullYear()} | Ecstasy
      </div>
    </footer>
  );
};

export default Footer;
