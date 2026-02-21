"use client";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import type { Food } from "@/types";

type FoodCardProps = {
  food: Food;
};

export default function FoodCard({ food }: FoodCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg p-4"
    >
      <Image
        src={food.image}
        alt={food.name}
        width={300}
        height={200}
        priority
        className="rounded-xl h-40 w-full object-cover"
      />

      <h3 className="font-semibold mt-3">{food.name}</h3>
      <p className="text-orange-500 font-bold">${food.price}</p>

      <button
        onClick={() => addToCart(food)}
        className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Add to Cart
      </button>
    </motion.div>
  );
}