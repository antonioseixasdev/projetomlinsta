import React from "react";

const testimonials = [
	{
		name: "Ana Souza",
		company: "Loja da Ana",
		text: "A integração facilitou demais minha rotina. Consigo gerenciar tudo em um só lugar!",
		avatar: "/assets/images/avatars/01.jpg",
	},
	{
		name: "Carlos Lima",
		company: "Mercado Digital",
		text: "Automatizei processos e ganhei tempo para focar no crescimento do meu negócio.",
		avatar: "/assets/images/avatars/02.jpg",
	},
	{
		name: "Juliana Alves",
		company: "InstaShop",
		text: "O painel é intuitivo e o suporte excelente. Recomendo para todos!",
		avatar: "/assets/images/avatars/03.png",
	},
];

export default function Testimonials() {
	return (
		<section className="py-8 bg-secondary dark:bg-tertiary-700 text-center">
			<div className="container mx-auto">
				<span className="inline-block bg-dark text-white rounded-full px-2 py-0.5 mb-2 text-xs">
					Depoimentos
				</span>
				<h2 className="text-2xl md:text-3xl font-bold mb-2">
					O que nossos clientes dizem
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
					{testimonials.map((t, idx) => (
						<div
							key={idx}
							className="flex flex-col items-center bg-white dark:bg-tertiary-800 rounded-xl p-4 shadow border border-gray-200 dark:border-white/15"
						>
							<img
								src={t.avatar}
								alt={t.name}
								className="w-10 h-10 rounded-full mb-2 object-cover"
							/>
							<p className="text-base italic mb-2">“{t.text}”</p>
							<div className="font-semibold text-primary dark:text-tertiary text-sm">
								{t.name}
							</div>
							<div className="text-xs text-gray-500">{t.company}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
