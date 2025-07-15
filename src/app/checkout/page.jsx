"use client";

import CheckoutForm from "../components/checkout/checkoutForm";
import OrderSummary from "../components/checkout/orderSummary";

const CheckoutPage = () => {
  return (
    <main className="min-h-screen bg-cream px-4 sm:px-8 lg:px-24 py-12 font-poppins">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
        {/* LEFT: Checkout Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded shadow-lg">
          <CheckoutForm />
        </div>

        {/* RIGHT: Order Summary */}
        <div className="bg-white p-6 rounded shadow-lg">
          <OrderSummary />
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
