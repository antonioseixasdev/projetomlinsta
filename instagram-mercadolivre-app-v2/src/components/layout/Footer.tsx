import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-nude-light dark:bg-cinza-elemento-dark border-t border-gray-200 dark:border-cinza-fundo-dark py-6 mt-8 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-texto-base-light dark:text-texto-base-dark">
          © {new Date().getFullYear()} MLInsta. Todos os direitos reservados.
        </div>
        <nav className="flex gap-4">
          <Link href="/privacidade" className="hover:underline text-texto-base-light dark:text-texto-base-dark">Privacidade</Link>
          <Link href="/termos" className="hover:underline text-texto-base-light dark:text-texto-base-dark">Termos</Link>
          <Link href="/contato" className="hover:underline text-texto-base-light dark:text-texto-base-dark">Contato</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
