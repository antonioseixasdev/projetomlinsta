import React from "react";

const plans = [
	{
		name: "Starter",
		price: "R$ 0",
		description: "Ideal para começar. Gestão básica e integração limitada.",
		features: ["1 integração", "Painel básico", "Suporte por e-mail"],
		highlight: false,
	},
	{
		name: "Pro",
		price: "R$ 49/mês",
		description: "Para quem quer automação e relatórios avançados.",
		features: [
			"Todas integrações",
			"Automação de tarefas",
			"Relatórios avançados",
			"Suporte prioritário",
		],
		highlight: true,
	},
	{
		name: "Enterprise",
		price: "Sob consulta",
		description: "Soluções customizadas para grandes operações.",
		features: [
			"Onboarding dedicado",
			"Customização de integrações",
			"Suporte premium",
		],
		highlight: false,
	},
];

export default function Pricing() {
	return (
		<section className="py-8 bg-white dark:bg-tertiary-800 text-center">
			<div className="container mx-auto">
				<span className="inline-block bg-dark text-white rounded-full px-2 py-0.5 mb-2 text-xs">
					Planos
				</span>
				<h2 className="text-2xl md:text-3xl font-bold mb-2">
					Escolha o plano ideal para você
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
					{plans.map((plan, idx) => (
						<div
							key={idx}
							className={`flex flex-col items-center rounded-xl p-4 shadow border border-gray-200 dark:border-white/15 bg-secondary dark:bg-tertiary-700 ${
								plan.highlight
									? "ring-2 ring-primary dark:ring-tertiary"
									: ""
							}`}
						>
							<h3 className="text-base font-bold mb-1">{plan.name}</h3>
							<div className="text-xl font-extrabold mb-1">
								{plan.price}
							</div>
							<p className="mb-2 text-gray-600 dark:text-gray-400 text-sm">
								{plan.description}
							</p>
							<ul className="mb-4 text-left">
								{plan.features.map((f, i) => (
									<li
										key={i}
										className="flex items-center gap-2 mb-1 text-xs"
									>
										<span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
										{f}
									</li>
								))}
							</ul>
							<button
								className={`btn btn-primary w-full ${
									plan.highlight ? "" : "btn-outline-primary"
								} text-xs py-1`}
							>
								Escolher
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
