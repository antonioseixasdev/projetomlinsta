import React from "react";

// TODO: Substitua pelo seu array real de perguntas e respostas
const faqs = [
  { question: "Do I need to know about how to code?", answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend." },
  { question: "Can I use it for commercial projects?", answer: "Feel free to do so. Lexend does exist to evolve every commercial project." },
  { question: "Can I use it for multiple projects?", answer: "Definitely! Please use it however you like; we don’t limit it." },
  { question: "Can I use this to create and sell a product?", answer: "Do not ever consider doing it." },
  { question: "What is your refund policy?", answer: "We do not offer refunds after a purchase has been made." },
];

export default function Faqs() {
  return (
    <section className="py-16 bg-nude-light dark:bg-cinza-fundo-dark text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-texto-base-light dark:text-texto-base-dark">Frequently asked questions!</h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-white dark:bg-cinza-elemento-dark rounded-lg shadow p-4">
              <summary className="font-semibold cursor-pointer text-lg">{faq.question}</summary>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
