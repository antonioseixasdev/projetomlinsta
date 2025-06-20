import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/lib/firebaseConfig";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from '@/context/AuthContext';
import ProductsList from "@/components/ProductsList";
import AddProductForm from "@/components/AddProductForm";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MLInsta App",
  description: "Sua plataforma de integração Instagram e Mercado Livre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [refresh, setRefresh] = useState(0);

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-nude-light text-texto-base-light dark:bg-cinza-fundo-dark dark:text-texto-base-dark transition-colors duration-300`}
      >
        <AuthProvider>
          <div className="fixed top-4 right-4 z-50">
            <ThemeSwitcher />
          </div>
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-8rem)]">
            {children}
            <section className="mt-8">
              <h2 className="text-xl font-bold mb-4">Seus Produtos</h2>
              <AddProductForm onProductAdded={() => setRefresh(r => r + 1)} />
              <ProductsList key={refresh} />
            </section>
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
