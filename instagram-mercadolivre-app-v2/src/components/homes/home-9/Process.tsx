import React from "react";

const steps = [
	{
		title: "Crie sua conta",
		description:
			"Cadastre-se em poucos segundos e tenha acesso ao painel completo.",
		icon: "/assets/icons/account.svg",
	},
	{
		title: "Conecte suas plataformas",
		description:
			"Integre Instagram e Mercado Livre de forma simples e segura.",
		icon: "/assets/icons/puzzle.svg",
	},
	{
		title: "Automatize e escale",
		description:
			"Gerencie, analise e escale sua operação com automações inteligentes.",
		icon: "/assets/icons/charts.svg",
	},
];

export default function Process() {
	return (
		<section className="py-8 bg-white dark:bg-tertiary-800 text-center">
			<div className="container mx-auto">
				<span className="inline-block bg-dark text-white rounded-full px-2 py-0.5 mb-2 text-xs">
					Como funciona
				</span>
				<h2 className="text-2xl md:text-3xl font-bold mb-2">
					<span className="text-tertiary dark:text-primary">3 passos</span> para
					transformar sua gestão
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
					{steps.map((step, idx) => (
						<div
							key={idx}
							className="flex flex-col items-center bg-secondary dark:bg-tertiary-700 rounded-xl p-4 shadow border border-gray-200 dark:border-white/15"
						>
							<img
								src={step.icon}
								alt={step.title}
								className="w-10 h-10 mb-2"
							/>
							<h4 className="font-semibold text-base mb-1">
								{step.title}
							</h4>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
