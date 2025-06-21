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
    <header className="navbar bg-base-100 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-base-content">
              MLInsta
            </Link>
          </div>
          {/* Navegação Desktop */}
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn btn-ghost btn-sm">
                {link.label}
              </Link>
            ))}
            {user && (
              <Link href="/perfil" className="btn btn-ghost btn-sm">
                Perfil
              </Link>
            )}
            <ThemeSwitcher />
            <AuthControls />
          </nav>
          {/* Botão do Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-2 flex flex-col gap-2 bg-base-100 rounded-box shadow p-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn btn-ghost btn-block" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            {user && (
              <Link href="/perfil" className="btn btn-ghost btn-block" onClick={() => setIsMobileMenuOpen(false)}>
                Perfil
              </Link>
            )}
            <ThemeSwitcher />
            <AuthControls />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
