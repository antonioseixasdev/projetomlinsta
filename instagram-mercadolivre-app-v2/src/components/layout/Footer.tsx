import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 border-t py-6 mt-8 text-base-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          © {new Date().getFullYear()} MLInsta. Todos os direitos reservados.
        </div>
        <nav className="flex gap-4">
          <Link href="/privacidade" className="link link-hover">Privacidade</Link>
          <Link href="/termos" className="link link-hover">Termos</Link>
          <Link href="/contato" className="link link-hover">Contato</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
