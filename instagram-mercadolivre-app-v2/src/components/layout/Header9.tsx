import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header9() {
  return (
    <header className="uc-header header-global z-50">
      <nav className="uc-navbar-container bg-white dark:bg-cinza-elemento-dark border-b border-gray-200 dark:border-cinza-fundo-dark">
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                alt="Lexend dark"
                src="/assets/images/common/logo-8-dark.svg"
                width={148}
                height={39}
                className="hidden dark:block"
              />
            </Link>
          </div>
          <nav className="hidden xl:flex gap-8 text-base font-bold">
            <Link href="/features" className="hover:underline">Features</Link>
            <Link href="/pricing" className="hover:underline">Pricing</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/about" className="hover:underline">About</Link>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="btn btn-primary px-4 py-2 rounded-full text-white bg-primary hover:bg-primary/90 transition">Download App</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
