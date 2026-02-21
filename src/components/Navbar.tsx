"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="bg-orange-500 text-white p-4 shadow-lg"
    >
      <div className="flex justify-between max-w-6xl mx-auto">
        <h1 className="font-bold text-xl">🍽 Foodies</h1>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/cart">Cart ({cart.length})</Link>
        </div>
      </div>
    </motion.nav>
  );
}