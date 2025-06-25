import React from "react";

// TODO: Substitua pelo seu array real de features
const features11 = [
  { title: "Fast and Reliable", description: "Plataforma estável, pronta para escalar.", alt: "Fast", src: "/assets/icons/feature-01.svg" },
  { title: "Discover Data Everywhere", description: "Encontre insights valiosos.", alt: "Discover", src: "/assets/icons/feature-02.svg" },
  { title: "Enrich Data with Context", description: "Dados enriquecidos para decisões melhores.", alt: "Enrich", src: "/assets/icons/feature-03.svg" },
  { title: "Risk Management", description: "Gerencie riscos facilmente.", alt: "Risk", src: "/assets/icons/feature-04.svg" },
  { title: "Privacy Compliance", description: "Conformidade com privacidade.", alt: "Privacy", src: "/assets/icons/feature-05.svg" },
  { title: "Third-Party Management", description: "Gerencie integrações externas.", alt: "Third-Party", src: "/assets/icons/feature-06.svg" },
];

export default function Solutions() {
  return (
    <section className="py-8 bg-white dark:bg-cinza-elemento-dark text-center">
      <div className="container mx-auto">
        <span className="inline-block bg-dark text-white rounded-full px-2 py-0.5 mb-2 text-xs">Solutions</span>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-tertiary dark:text-primary">End-to-End</span> seamless data management solutions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">Offers a unified platform that fosters innovation while providing end-to-end data management.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features11.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center bg-secondary dark:bg-tertiary-800 rounded-xl p-4 shadow border border-gray-200 dark:border-white/15">
              {/* Ícone removido */}
              <h4 className="font-semibold text-base mb-1">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs">{feature.description}</p>
            </div>
          ))}
        </div>
        <a href="#" className="btn btn-outline-primary mt-4 inline-block rounded-full px-4 py-1 border border-primary text-primary hover:bg-primary hover:text-white transition text-xs">View all solutions</a>
      </div>
    </section>
  );
}
