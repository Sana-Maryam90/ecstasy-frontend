"use client";
import Image from "next/image";
import { useCart } from "@/app/hooks/cartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, addToCart, decreaseQuantity } = useCart();

  return (
    <div className="font-poppins mb-4 border-b pb-4">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded"
            unoptimized
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold">{item.name}</p>
          <p>PKR {item.price}</p>
          <div className="flex items-center mt-2 gap-2">
            <button
              onClick={() =>
                item.qty > 1 ? decreaseQuantity(item.id) : removeFromCart(item.id)
              }
              className="border rounded w-6 h-6 text-sm"
            >
              -
            </button>
            <span>{item.qty}</span>
            <button
              onClick={() => addToCart(item)}
              className="border rounded w-6 h-6 text-sm"
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-auto text-red-600 text-xs underline"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
