// app/api/productsAPIs.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;


export const getProductsByCategory = async (category) => {
  const res = await fetch(`${API_BASE_URL}/api/products?category=${category}`);
  if (!res.ok) throw new Error("Failed to fetch category products");
  return res.json();
};


export const getProductById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/api/products/${id}/`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return await res.json();
};
