// Removido import Image from "next/image";

// TODO: Substitua pelo seu array real de marcas
const brands6 = [
  { alt: "Brand 1", src: "/assets/brands/brand-01.svg", width: 80, height: 32 },
  { alt: "Brand 2", src: "/assets/brands/brand-05.svg", width: 80, height: 32 },
  { alt: "Brand 3", src: "/assets/brands/brand-03.svg", width: 80, height: 32 },
  { alt: "Brand 4", src: "/assets/brands/brand-07.svg", width: 80, height: 32 },
];

export default function Brands() {
  return (
    <section className="py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-500 mb-2">Trusted by over most popular companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Marcas removidas */}
        </div>
      </div>
    </section>
  );
}
