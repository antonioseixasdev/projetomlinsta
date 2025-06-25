"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from '@/context/AuthContext';
import AuthControls from '@/components/AuthControls';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Header() {
  const { user } = useAuth();

  // Bloco de debug visível na interface
  return (
    <>
      <div style={{ background: 'yellow', color: 'black', padding: 8, textAlign: 'center' }}>
        DEBUG: {user ? user.email : 'Nenhum usuário autenticado'}
      </div>
      <header className="sticky top-0 z-50 bg-white dark:bg-cinza-elemento-dark shadow-md border-b border-gray-200 dark:border-cinza-fundo-dark">
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
            <span className="ml-2 text-xl font-bold text-texto-base-light dark:text-texto-base-dark">MLInsta</span>
          </Link>
          {/* Navegação principal */}
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="hover:underline text-texto-base-light dark:text-texto-base-dark">Dashboard</Link>
            <Link href="/perfil" className="hover:underline text-texto-base-light dark:text-texto-base-dark">Perfil</Link>
            {/* Mostra o nome do usuário se estiver logado */}
            {user && (
              <span className="font-semibold text-texto-base-light dark:text-texto-base-dark">
                {user.displayName || user.email}
              </span>
            )}
            <ThemeSwitcher />
            <AuthControls />
          </div>
        </nav>
      </header>
    </>
  );
}