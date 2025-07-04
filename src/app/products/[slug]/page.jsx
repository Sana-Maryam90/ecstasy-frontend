"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ProductCard from "@/app/components/product/productCard";
import Link from "next/link";

const sampleProducts = [
  {
    id: 1,
    name: "Floral Notebook",
    Img: "/assets/images/JPEGs/beigenotebook.jpg",
    price: "200",
  },
  {
    id: 2,
    name: "Hardpaper Sketchbook",
    Img: "/assets/images/JPEGs/sketchbook.jpg",
    price: "300",
  },
  {
    id: 3,
    name: "Foil Notebook",
    Img: "/assets/images/JPEGs/graybook.jpg",
    price: "250",
  },
  {
    id: 4,
    name: "Daily Diary",
    Img: "/assets/images/JPEGs/diary.jpg",
    price: "220",
  },
];

const ProductList = () => {
  const params = useParams();
  const category = params?.category || "products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(sampleProducts);
  }, [category]);

  return (
    <>
      <Navbar />

      <main className="bg-[#F9F4EF] min-h-screen font-poppins px-4 sm:px-10 lg:px-24 py-16 relative overflow-hidden">

        {/* Sparkle SVG Decoration */}
        <div className="absolute top-20 left-10 opacity-20 z-0">
          <img
            src="/assets/images/svgs/sparkle.svg"
            alt="sparkle"
            className="w-28 h-28 rotate-[15deg]"
          />
        </div>

        {/* Breadcrumb */}
        <div className="text-[#FF5E43] text-sm mb-6 relative z-10">
          <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
          <Link href="/products" className="hover:underline">Products</Link> &gt;{" "}
          <span className="capitalize">{category}</span>
        </div>

        {/* Section Title */}
        <h1 className="text-4xl sm:text-5xl font-orelega text-center mb-4 relative z-10">
          <span className="bg-[url('/assets/images/svgs/sparkle.svg')] bg-cover bg-center px-6 py-4 inline-block">
            {category?.toUpperCase()}
          </span>{" "}
          Collection
        </h1>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-2 mb-10 z-10 relative">
          Discover our unique collection of handcrafted {category.toLowerCase()} — curated to bring color and charm to your everyday.
        </p>

        {/* Filter Bar */}
        <div className="flex justify-between items-center mb-8 text-sm z-10 relative">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{products.length}</span> items
          </p>
          <select className="border border-gray-300 rounded-full px-4 py-1 bg-white shadow-sm">
            <option value="default">Sort by: Default</option>
            <option value="price-asc">Price Low to High</option>
            <option value="price-desc">Price High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center relative z-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              Img={product.Img}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>

        {/* Decorative bottom element */}
        <div className="absolute bottom-0 right-0 opacity-10 z-0">
          <img
            src="/assets/images/svgs/purpleflow.svg"
            alt="decor"
            className="w-44 h-44"
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductList;
