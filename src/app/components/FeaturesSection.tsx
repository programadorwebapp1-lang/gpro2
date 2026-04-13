import {
  DollarSign,
  Package,
  Users,
  TrendingUp,
  Tag,
  FileText,
  Contact,
  Truck,
  Headset,
  ReceiptText,
  Box,
  CircleAlert,
  MessageCircleMore,
  FileDown,
  Archive,
  PanelTop,
  Icon
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Gestão de Vendas",
    description: "Registro rápido de vendas com múltiplas formas de pagamento. Controle total sobre cada transação.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Package,
    title: "Cadastrar Produtos",
    description: "Cadastrar seus Produtos, Preço , Categoria, marca, etc. ",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Archive,
    title: "Controle de Estoque",
    description: "Atualização automática do estoque e alertas inteligentes quando produtos estão acabando.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Users,
    title: "Cadastro de Clientes",
    description: "Histórico completo de compras, controle de fiado e gestão de relacionamento com clientes.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: TrendingUp,
    title: "Relatórios Financeiros",
    description: "Acompanhe vendas por dia, mês, vendedor e lucro com gráficos e relatórios detalhados.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Tag,
    title: "Cupons e Descontos",
    description: "Crie e controle cupons promocionais para atrair mais clientes e aumentar as vendas.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: FileText,
    title: "Emissão de Documentos",
    description: "Gere notas fiscais, recibos e comprovantes de forma rápida e organizada.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Contact,
    title: "Cadastro de Vendedores",
    description: "Controle de vendedores e desempenho individual.",
    color: "bg-gray-100 text-gray-600",
  },
  {
    icon: Truck,
    title: "Cadastro de Entregadores",
    description: "Mantenha um cadastro atualizado de entregadores e controle suas entregas.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Headset,
    title: "Suporte",
    description: "Cadastre equipe de Suporte, acompanhe chamados e resolva problemas rapidamente.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: ReceiptText,
    title: "Cadastro de Boletos de Contas a Pagar",
    description: "Mantenha o controle financeiro do seu negócio com um cadastro completo de boletos e contas a pagar.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Box,
    title: "Entregas",
    description: "Controle de entregas e rastreamento de pedidos para garantir que seus clientes recebam tudo no prazo.",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: CircleAlert,
    title: "Relatar problema de entrega",
    description: "Relate problemas de entrega e acompanhe a resolução de problemas relacionados a entregas.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: MessageCircleMore,
    title: "Chat entre Entregadores e Vendedores",
    description: "Comunique-se diretamente com entregadores e vendedores para resolver dúvidas e problemas rapidamente.",
    color: "bg-lime-100 text-lime-600",
  },
  {
    icon: FileDown,
    title: "Exportação de Dados",
    description: "Exporte seus dados de vendas,entregas, estoque e clientes para análise externa ou backup.",
    color: "bg-gray-100 text-gray-600",
  },
  {
    icon: PanelTop,
    title: "Painel de logs de atividades",
    description: "Acompanhe todas as atividades do sistema em um painel de logs detalhado para garantir a segurança e o controle do seu negócio.",
    color: "bg-blue-100 text-blue-600",
  }
];

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            Tudo que você precisa para <span className="text-[#0ea5e9]">gerenciar seu negócio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Funcionalidades completas e integradas para tornar sua gestão mais eficiente
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-[#0ea5e9] hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            E muito mais funcionalidades pensadas para o seu negócio crescer
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("telas");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-[#0F172A] text-white rounded-lg hover:bg-[#1e293b] transition-colors shadow-lg"
          >
            Ver o Sistema em Ação
          </button>
        </div>
      </div>
    </section>
  );
}
