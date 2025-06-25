import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer9() {
  return (
    <footer className="uc-footer bg-white dark:bg-cinza-elemento-dark border-t border-gray-200 dark:border-cinza-fundo-dark py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex gap-4 flex-wrap">
          <Link href="/features" className="hover:underline">Features</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
        <div className="text-sm opacity-60 text-center md:text-right">
          Lexend © {new Date().getFullYear()}, All rights reserved.
        </div>
      </div>
    </footer>
  );
}
