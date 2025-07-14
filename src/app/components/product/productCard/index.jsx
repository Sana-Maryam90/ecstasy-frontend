"use client";
import Link from "next/link";

const ProductCard = ({ product }) => {
  if (!product) return null;
  const { name, image, price, slug, id } = product;

  return (
    <Link href={`/products/${slug}/${id}`} className="w-[270px] h-[300px] min-w-[270px]">
      <div className="w-full h-full flex flex-col font-Poppins relative cursor-pointer group border-2 border-black">
        {/* Image with overlay */}
        <div
          className="h-[250px] w-full bg-cover bg-center flex items-center justify-center text-transparent font-semibold text-lg relative group-hover:text-white transition-all duration-200"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-sm" />
          <span className="z-10">{name}</span>
        </div>

        {/* Bottom Bar */}
        <div className="h-[50px] w-full flex justify-around items-center bg-[#D9D9D9] group-hover:bg-black text-black group-hover:text-white transition-colors duration-200">
          <p className="price group-hover:invisible">PKR {price}</p>
          <p className="addBag">Add to Bag</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
