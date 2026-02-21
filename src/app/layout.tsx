import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

export const metadata = {
  title: "Restaurant App",
  description: "Food ordering website",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-linear-to-br from-orange-50 to-yellow-100 min-h-screen">
        <CartProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto p-6">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}