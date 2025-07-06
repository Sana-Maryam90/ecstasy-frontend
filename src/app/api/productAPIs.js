// app/api/productsAPIs.js

export const getProductsByCategory = async (category) => {
  const res = await fetch(`http://localhost:8000/api/products?category=${category}`);
  if (!res.ok) throw new Error("Failed to fetch category products");
  return res.json();
};


export const getProductById = async (id) => {
  const res = await fetch(`http://localhost:8000/api/products/${id}/`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return await res.json();
};
