"use client";

import CategoryBox from "@/app/components/product/categoryBox";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

const categories = [
  {
    name: "Notebooks",
    img: "/assets/images/JPEGs/notebooks.jpg",
    link: "/products/notebooks",
    shadowColor: "#A6D1BD",
  },
  {
    name: "Notepads",
    img: "/assets/images/JPEGs/notepad.jpg",
    link: "/products/notepads",
    shadowColor: "#DFBACD",
  },
  {
    name: "Sketchbooks",
    img: "/assets/images/JPEGs/sketch.jpg",
    link: "/products/sketchbooks",
    shadowColor: "#EE8794",
  },
];

const AllCategoriesPage = () => {
  return (
    <>
      <Navbar />

      <main className="bg-[#F9F4EF] min-h-screen px-4 sm:px-12 py-20 font-poppins">
        {/* Breadcrumb */}
        <nav className="text-sm text-[#FF5E43] font-medium mb-6 px-2 sm:px-0">
          <Link href="/" className="hover:underline">Home</Link> &gt; <span>Products</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-orelega text-center mb-12">
          Explore by Category
        </h1>

        {/* Category Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((category, index) => (
            <CategoryBox
              key={index}
              Img={category.img}
              txt={category.name}
              link={category.link}
              shadowColor={category.shadowColor}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AllCategoriesPage;
