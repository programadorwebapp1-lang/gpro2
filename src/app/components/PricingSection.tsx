import { useMemo, useState } from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "R$ 80",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "Até 70 produtos cadastrados",
      "3 usuários sem contar o administrador",
      "Gestão de vendas básica",
      "Controle de estoque",
      "Relatórios simples",
      "Gestão de clientes",
      "Suporte por email",
    ],
    highlighted: false,
    cta: "Escolher Básico",
  },
  {
    name: "Profissional",
    price: "R$ 149",
    period: "/mês",
    description: "Mais vendido",
    features: [
      "Até 150 produtos",
      "5 usuários sem contar o administrador",
      "Todas as funcionalidades",
      "Gestão de clientes completa",
      "Relatórios avançados",
      "Cupons e promoções",
      "Suporte prioritário",
      "Backup automático",
    ],
    highlighted: true,
    cta: "Escolher Profissional",
  },
  {
    name: "Completo",
    price: "R$ 200",
    period: "/mês",
    description: "Para grandes operações",
    features: [
      "Produtos ilimitados",
      "Usuários ilimitados",
      "Todas as funcionalidades",
      "API para integrações",
      "Relatórios personalizados",
      "Suporte 24/7",
      "Treinamento incluso",
    ],
    highlighted: false,
    cta: "Escolher Completo",
  },
];

export function PricingSection() {
  const initialHighlightedIndex = useMemo(
    () => plans.findIndex((plan) => plan.highlighted),
    []
  );
  const [activePlanIndex, setActivePlanIndex] = useState(
    initialHighlightedIndex >= 0 ? initialHighlightedIndex : 0
  );

  const openWhatsAppWithPlan = (planName: string) => {
    const message = `Olá! Gostaria de contratar o plano ${planName}.`;
    const url = `https://wa.me/5568992281187?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="planos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            Planos que se adaptam ao seu <span className="text-[#0ea5e9]">negócio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho e necessidades da sua empresa
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            (() => {
              const isHighlighted = index === activePlanIndex;
              return (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActivePlanIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setActivePlanIndex(index);
                    }
                  }}
                  className={`relative rounded-2xl p-8 ${isHighlighted
                    ? "bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] text-white shadow-2xl scale-105"
                    : "bg-white border-2 border-gray-200 hover:border-[#0ea5e9] transition-colors"
                    }`}
                >
                  {isHighlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#10b981] text-white text-sm font-bold rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      {plan.description}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3
                      className={`text-2xl font-bold mb-2 ${isHighlighted ? "text-white" : "text-[#0F172A]"
                        }`}
                    >
                      {plan.name}
                    </h3>
                    {!isHighlighted && (
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                    )}
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-5xl font-bold ${isHighlighted ? "text-white" : "text-[#0F172A]"
                          }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={isHighlighted ? "text-white/80" : "text-gray-600"}
                      >
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isHighlighted ? "text-white" : "text-[#10b981]"
                            }`}
                        />
                        <span
                          className={
                            isHighlighted
                              ? "text-white/90"
                              : "text-gray-700"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      setActivePlanIndex(index);
                      openWhatsAppWithPlan(plan.name);
                    }}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${isHighlighted
                      ? "bg-white text-[#0ea5e9] hover:bg-gray-50 shadow-lg cursor-pointer"
                      : "bg-[#0F172A] text-white hover:bg-[#1e293b] cursor-pointer"
                      }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })()
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Todos os planos incluem 7 dias de teste grátis
          </p>
        </div>
      </div>
    </section>
  );
}
