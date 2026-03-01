import { Zap, Smartphone, Shield, Building2 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Interface Simples e Rápida",
    description: "Design intuitivo que qualquer pessoa consegue usar. Sem curva de aprendizado complicada.",
  },
  {
    icon: Smartphone,
    title: "Multiplataforma",
    description: "Funciona perfeitamente em computador, tablet e celular. Acesse de qualquer lugar.",
  },
  {
    icon: Shield,
    title: "Sistema Seguro",
    description: "Seus dados protegidos com criptografia e backups automáticos diários.",
  },
  {
    icon: Building2,
    title: "Ideal para Pequenos Negócios",
    description: "Desenvolvido especialmente para as necessidades de comércios, lojas e mercados.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que escolher o <span className="text-[#0ea5e9]">GestãoPro?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Mais do que um sistema, uma solução completa para o seu negócio
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-[#0ea5e9]/10 border-2 border-[#0ea5e9] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#0ea5e9] transition-colors">
                  <Icon className="w-8 h-8 text-[#0ea5e9] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#10b981]/10 border border-[#10b981] rounded-full">
            <span className="text-2xl">✨</span>
            <span className="text-[#10b981] font-medium">
              Atualizações gratuitas e suporte técnico incluído
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
