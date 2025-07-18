export const placeOrder = async (payload) => {
  const res = await fetch("http://localhost:8000/api/create-order/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Failed to place order");
  }

  return res.json();
};
