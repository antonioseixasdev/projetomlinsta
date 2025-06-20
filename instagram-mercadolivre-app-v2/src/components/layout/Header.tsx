"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import AuthControls from "@/components/AuthControls";
import { useAuth } from '@/context/AuthContext';

const MenuIcon = () => (
  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/products", label: "Produtos" },
    { href: "/settings", label: "Configurações" },
  ];

  return (
    <header className="bg-nude-light dark:bg-cinza-elemento-dark shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-texto-base-light dark:text-texto-base-dark">
              MLInsta
            </Link>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-texto-base-light dark:text-texto-base-dark hover:text-areia-light dark:hover:text-areia-dark transition-colors px-3 py-2 rounded-md text-sm font-medium">
                {link.label}
              </Link>
            ))}
            {user && (
              <Link href="/perfil" className="text-texto-base-light dark:text-texto-base-dark hover:text-areia-light dark:hover:text-areia-dark transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Meu Perfil
              </Link>
            )}
          </nav>

          {/* Controles da Direita Desktop (ThemeSwitcher, User Avatar, Auth) */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeSwitcher />
            <AuthControls />
            <div className="w-8 h-8 bg-gray-400 dark:bg-gray-500 rounded-full" title="User Avatar Placeholder"></div>
          </div>

          {/* Botão do Menu Mobile */}
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2 p-2 rounded-md text-texto-base-light dark:text-texto-base-dark hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-areia-light dark:focus:ring-areia-dark"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <span className="sr-only">{isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}</span>
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-texto-base-light dark:text-texto-base-dark hover:bg-areia-light/20 dark:hover:bg-areia-dark/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {user && (
              <Link
                href="/perfil"
                className="block px-3 py-2 rounded-md text-base font-medium text-texto-base-light dark:text-texto-base-dark hover:bg-areia-light/20 dark:hover:bg-areia-dark/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meu Perfil
              </Link>
            )}
          </nav>
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
            <AuthControls />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
