"use client";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && <p>No items yet.</p>}

      {cart.map(item => (
        <div
          key={item.id}
          className="flex justify-between bg-white p-4 rounded-lg shadow mb-3"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>${item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}