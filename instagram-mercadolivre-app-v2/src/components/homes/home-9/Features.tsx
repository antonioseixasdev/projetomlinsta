import React from "react";

// TODO: Substitua pelo seu array real de features
const features10 = [
  { title: "Enrich Data with Context & Risk Management", alt: "Feature 1", src: "/assets/icons/feature-01.svg" },
  { title: "Intuitive dashboard for at-a-glance insights", alt: "Feature 2", src: "/assets/icons/feature-02.svg" },
  { title: "Automated data analysis and reporting", alt: "Feature 3", src: "/assets/icons/feature-03.svg" },
];

export default function Features() {
  return (
    <section className="py-8 bg-secondary dark:bg-tertiary-700 text-center">
      <div className="container mx-auto">
        <span className="inline-block bg-dark text-white rounded-full px-2 py-0.5 mb-2 text-xs">Main Features</span>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Automate your workflow with our <span className="text-tertiary dark:text-primary">1000+ apps integrations</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">Connect your tools, connect your teams with Lexend.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features10.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white dark:bg-tertiary-800 rounded-xl p-4 shadow border border-gray-200 dark:border-white/15">
              <h4 className="font-semibold text-base mb-1">{feature.title}</h4>
              <a href="#" className="text-primary hover:underline mt-1 text-xs">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
