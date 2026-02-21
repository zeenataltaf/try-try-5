"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-orange-600"
      >
        Welcome to Foodies 🍔
      </motion.h1>

      <p className="mt-6 text-gray-600 text-lg">
        Fresh food. Fast delivery. Delicious experience.
      </p>

      <Link href="/menu">
        <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-xl shadow-lg hover:bg-orange-600 transition">
          Explore Menu
        </button>
      </Link>
    </section>
  );
}