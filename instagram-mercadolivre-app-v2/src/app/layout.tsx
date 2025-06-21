import "./globals.css";
import { AuthProvider } from '@/context/AuthContext';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-nude-light text-texto-base-light dark:bg-cinza-fundo-dark dark:text-texto-base-dark transition-colors duration-300">
        <AuthProvider>
          <div className="fixed top-4 right-4 z-50">
            <ThemeSwitcher />
          </div>
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-8rem)]">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
