"use client";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Button from "@/app/components/ui/button";
import ProductCard from "@/app/components/product/productCard";
import { getProductById } from "@/app/api/productAPIs";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/app/hooks/cartContext";



const product = {
  name: "Floral Notebook",
  brand: "Ecstasy.",
  price: 200,
  description:
    "Charming floral notebook for sketching, journaling, or note-taking. Handmade and printed on recycled paper.",
  image: "/assets/images/JPEGs/beigenotebook.jpg",
  dimensions: {
    width: "15cm",
    height: "21cm",
    depth: "2cm",
  },
  colors: ["#000000", "#FF5E43", "#A6D1BD", "#EE8794"],
  arrival: "Aug 31, 2025",
};


const recommendedProducts = [
  {
    id: 1,
    name: "Beams A6 Pocket Notebook",
    image: "/assets/images/JPEGs/sketchbook.jpg",
    price: "210",
  },
  {
    id: 2,
    name: "Casetta A6 Pocket Notebook",
    image: "/assets/images/JPEGs/sketch.jpg",
    price: "220",
  },
  {
    id: 3,
    name: "Groove A6 Pocket Notebook",
    image: "/assets/images/JPEGs/sketchbook.jpg",
    price: "230",
  },
  {
    id: 4,
    name: "Rise A6 Pocket Notebook",
    image: "/assets/images/JPEGs/beigenotebook.jpg",
    price: "200",
  },
  {
    id: 5,
    name: "Sunset A6 Pocket Notebook",
    image: "/assets/images/JPEGs/graybook.jpg",
    price: "215",
  },
];



export default function ProductDetails() {

  const { addToCart } = useCart();

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (e) {
        console.error(e);
      }
    }
    loadProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <main className="bg-cream text-black font-poppins px-4 sm:px-12 lg:px-32 py-36 min-h-screen grid grid-cols-1 md:grid-cols-2 ">
        {/* LEFT BLOCK */}
        <div className="flex flex-col justify-between border-b border-r border-black-300 p-6">
          {/* Brand and Price */}
          <div className="flex justify-between border-b border-black-300 pb-6">
            <h2 className="text-4xl font-orelega">{product.name}</h2>
            <p className="text-2xl font-semibold">PKR {product.price}</p>
          </div>

          {/* Name & Description */}
          <div className="border-b border-black-300 py-6">
            {/* <h3 className="font-bold text-lg mb-1">{product.name}</h3> */}
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>

          {/* Measurements */}
          <div className="border-b border-black-300 py-6">
            <h4 className="font-semibold mb-2 text-sm">Measurements</h4>
            <ul className="text-sm space-y-1">
              <li>Width: {product.dimensions?.width || "20cm"}</li>
              <li>Height: {product.dimensions?.height || "55cm"}</li>
              <li>Depth: {product.dimensions?.depth || "10cm"}</li>
            </ul>
          </div>

         {/* Buy Button Section */}
          <div className="border-b border-black-300 py-6">
            <h4 className="font-semibold mb-2 text-sm">Ready to order?</h4>
            <Button txt={"Buy Now"} onClick={() => addToCart(product)} className="w-[100px] h-[35px]"/>
          </div>

          {/* Arrival & Website */}
          <div className="flex justify-between text-sm pt-6">
            <span className="text-gray-500">www.ecstasy.com</span>
            <span>Arrival: {product?.arrival || "20-Aug-2025"}</span>
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="border-b border-r border-black-300 p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[500px] object-contain"
          />
        </div>
      </main>


        <section className="bg-cream pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(300px, auto)]">
              
              {/* Text Card */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 p-6 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <h3 className="text-4xl font-bold font-orelega mb-2">You may also like</h3>
                  <p className="text-sm font-poppins text-gray-700 max-w-[500px]">
                    Handpicked notebooks to match your unique style and creative spirit. Discover fresh picks made for dreamers and doers.
                  </p>
                          <div className="absolute bottom-0 right-0 opacity-30 z-0">
          <img
            src="/assets/images/svgs/purpleflow.svg"
            alt="decor"
            className="w-44 h-44"
          />
        </div>
                </div>
                {/* <Button txt={"Explore"} className="w-[100px] h-[35px]"/> */}
              </div>

              {/* Product Cards */}
              {recommendedProducts.map((product) => (
                <div key={product.id} className="col-span-1 flex justify-center">
                  <ProductCard
                    product={product}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      <Footer />
    </>
  );
}
