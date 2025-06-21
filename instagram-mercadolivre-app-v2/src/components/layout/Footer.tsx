import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content border-t py-8 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Link href="/">
            <Image src="/file.svg" alt="Logo" width={34} height={34} />
          </Link>
          <span className="ml-2 font-bold">MLInsta</span>
        </div>
        <nav className="flex gap-4 flex-wrap">
          <Link href="/privacidade" className="hover:underline">Privacidade</Link>
          <Link href="/termos" className="hover:underline">Termos</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
        </nav>
        <div className="text-sm opacity-60 text-center md:text-right">
          © {new Date().getFullYear()} MLInsta. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
