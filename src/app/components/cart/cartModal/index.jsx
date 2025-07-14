"use client";

import { useCart } from "@/app/hooks/cartContext";
import CartItem from "../cartItem";
import Link from "next/link";
import Button from "../../ui/button";

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems } = useCart(); 

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="w-full sm:w-[400px] bg-white p-6 shadow-lg overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
            ))
        )}

        {/* Actions */}
        {cartItems.length > 0 && (
          <div className="mt-6 space-y-4">
            <Link href="/checkout" className="block">
              {/* <button className="w-full py-2 bg-orange hover:bg-orange-dark text-white rounded">
                Proceed to Checkout
              </button> */}
              <Button txt="Proceed to Checkout" className="w-full py-2"/>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
