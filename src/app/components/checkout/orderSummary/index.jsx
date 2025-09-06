"use client";
import { useCart } from "@/app/hooks/cartContext";
import Image from "next/image";
import Button from "../../ui/button";

const OrderSummary = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 250;
  const total = subtotal + shipping;

  return (
    <div className="bg-[#f9f9f9] p-6 rounded-md shadow-lg w-full sm:max-w-sm">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      {/* Cart Items */}
      <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-3 items-center">
            <div className="relative w-12 h-12">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="rounded object-cover"
                unoptimized
              />
            </div>
            <div className="flex-1">
              <p className="text-sm">{item.name}</p>
              <p className="text-xs text-gray-500">Qty: {item.qty}</p>
            </div>
            <p className="text-sm">PKR {item.price * item.qty}</p>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 border-t pt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>PKR {subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>PKR {shipping}</span>
        </div>
        <div className="flex justify-between font-semibold text-base">
          <span>Total</span>
          <span>PKR {total}</span>
        </div>
      </div>

      {/* Action */}
      <Button txt="Place Order" className="w-full py-2 mt-4"/>
    </div>
  );
};

export default OrderSummary;
