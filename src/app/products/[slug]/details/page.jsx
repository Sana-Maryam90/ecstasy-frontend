// "use client";

// import Navbar from "@/app/components/navbar";
// import Footer from "@/app/components/footer";
// import { useParams } from "next/navigation";

// const sampleProduct = {
//   name: "Floral Notebook",
//   brand: "Ecstasy.",
//   price: 200,
//   description:
//     "A charming notebook wrapped in floral artistry. Ideal for journaling, sketching, or everyday notes. Handcrafted with love.",
//   image: "/assets/images/JPEGs/beigenotebook.jpg",
//   colors: ["#000000", "#FF5E43", "#A6D1BD", "#EE8794"],
//   dimensions: {
//     width: "15cm",
//     height: "21cm",
//     depth: "2cm",
//   },
//   estimatedArrival: "Aug 31, 2025",
// };

// const ProductDetailPage = () => {
//   const params = useParams();
//   const slug = params?.slug;

//   return (
//     <>
//       {/* <Navbar /> */}

//       <main className="bg-[#F9F4EF] font-poppins py-20 px-4 sm:px-12 lg:px-32 min-h-screen">
//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Product Image */}
//           <div className="bg-white p-4 rounded-xl shadow-sm border">
//             <img
//               src={sampleProduct.image}
//               alt={sampleProduct.name}
//               className="w-full object-contain rounded-md"
//             />
//           </div>

//           {/* Product Details */}
//           <div>
//             {/* Brand */}
//             <h2 className="text-3xl sm:text-4xl font-bold font-orelega mb-2 text-black">
//               {sampleProduct.brand}
//             </h2>

//             {/* Price */}
//             <p className="text-2xl font-semibold text-gray-800 mb-6">
//               PKR {sampleProduct.price}
//             </p>

//             {/* Name & Description */}
//             <h3 className="text-xl font-semibold mb-1">
//               {sampleProduct.name}
//             </h3>
//             <p className="text-gray-600 mb-6">{sampleProduct.description}</p>

//             {/* Measurements */}
//             <div className="mb-6">
//               <h4 className="text-md font-semibold mb-2">Measurements</h4>
//               <ul className="text-sm text-gray-700 space-y-1">
//                 <li>Width: {sampleProduct.dimensions.width}</li>
//                 <li>Height: {sampleProduct.dimensions.height}</li>
//                 <li>Depth: {sampleProduct.dimensions.depth}</li>
//               </ul>
//             </div>

//             {/* Colors */}
//             <div className="mb-6">
//               <h4 className="text-md font-semibold mb-2">Available Colors</h4>
//               <div className="flex gap-2">
//                 {sampleProduct.colors.map((color, idx) => (
//                   <div
//                     key={idx}
//                     className="w-5 h-5 rounded-full border"
//                     style={{ backgroundColor: color }}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Estimated Arrival */}
//             <p className="text-sm text-gray-500">
//               Estimated Arrival: {sampleProduct.estimatedArrival}
//             </p>

//             {/* Add to Cart Button */}
//             <button className="mt-6 bg-orange text-white px-6 py-2 rounded-full shadow-md hover:bg-orange/90 transition">
//               Add to Bag
//             </button>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default ProductDetailPage;



"use client";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Button from "@/app/components/ui/button";

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

export default function ProductDetails() {
  return (
    <>
      <Navbar />
      <main className="bg-cream text-black font-poppins px-4 sm:px-12 lg:px-32 py-36 min-h-screen grid grid-cols-1 md:grid-cols-2 ">
        {/* LEFT BLOCK */}
        <div className="flex flex-col justify-between border-b border-r border-black-300 p-6">
          {/* Brand and Price */}
          <div className="flex justify-between border-b border-black-300 pb-6">
            <h2 className="text-4xl font-bold font-orelega">{product.name}</h2>
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
              <li>Width: {product.dimensions.width}</li>
              <li>Height: {product.dimensions.height}</li>
              <li>Depth: {product.dimensions.depth}</li>
            </ul>
          </div>

         {/* Buy Button Section */}
          <div className="border-b border-black-300 py-6">
            <h4 className="font-semibold mb-2 text-sm">Ready to order?</h4>
            <Button txt={"Buy Now"} className="w-[100px] h-[35px]"/>
          </div>

          {/* Arrival & Website */}
          <div className="flex justify-between text-sm pt-6">
            <span className="text-gray-500">www.ecstasy.com</span>
            <span>Arrival: {product.arrival}</span>
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
      <Footer />
    </>
  );
}
