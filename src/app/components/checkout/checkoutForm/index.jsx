"use client";
import { useForm } from "react-hook-form";

const CheckoutForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-2xl">
      {/* Contact */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Contact</h2>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Delivery */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Delivery</h2>
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="First name" {...register("firstName", { required: true })} className="border p-2 rounded" />
          <input placeholder="Last name" {...register("lastName", { required: true })} className="border p-2 rounded" />
        </div>
        <input placeholder="Address" {...register("address", { required: true })} className="w-full border p-2 rounded mt-2" />
        <div className="grid grid-cols-2 gap-4 mt-2">
          <input placeholder="City" {...register("city", { required: true })} className="border p-2 rounded" />
          <input placeholder="Postal code (optional)" {...register("postal")} className="border p-2 rounded" />
        </div>
        <input placeholder="Phone" {...register("phone", { required: true })} className="w-full border p-2 rounded mt-2" />
      </div>

      {/* Shipping Method */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Shipping Method</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" value="cod" {...register("shipping", { required: true })} />
            <span>Flat Shipping Rs 250 (Cash on Delivery)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" value="card" {...register("shipping", { required: true })} />
            <span>Free Shipping (Card Payment)</span>
          </label>
        </div>
        {errors.shipping && <p className="text-red-500 text-sm">Please select a shipping method</p>}
      </div>

      {/* Submit for now (real button comes from OrderSummary) */}
      <button type="submit" className="hidden">Submit</button>
    </form>
  );
};

export default CheckoutForm;
