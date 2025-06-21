"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from '@/context/AuthContext';
import AuthControls from '@/components/AuthControls';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-md">
      <nav className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/file.svg"
            alt="Logo"
            width={40}
            height={40}
            className="dark:hidden"
          />
          <Image
            src="/globe.svg"
            alt="Logo dark"
            width={40}
            height={40}
            className="hidden dark:block"
          />
          <span className="ml-2 text-xl font-bold text-base-content">MLInsta</span>
        </Link>
        {/* Navegação principal */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="hover:underline text-base-content">Dashboard</Link>
          <Link href="/perfil" className="hover:underline text-base-content">Perfil</Link>
          <ThemeSwitcher />
          <AuthControls />
        </div>
      </nav>
    </header>
  );
}
