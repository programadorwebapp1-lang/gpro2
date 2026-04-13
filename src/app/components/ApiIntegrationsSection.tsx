import {
  Plug,
  Bell,
  ReceiptText,
  Truck,
  CalendarClock,
  PackageCheck,
} from "lucide-react";

const automations = [
  {
    icon: Plug,
    title: "Muitas integrações disponíveis",
    description: "Nosso sistema possui integração com muitos serviços e plataformas. São diversas opções para você escolher e conectar conforme sua necessidade.",
  },
  {
    icon: ReceiptText,
    title: "Comprovante de compra automático",
    description:
      "Após a compra, o cliente recebe o comprovante automaticamente, sem envio manual.",
  },
  {
    icon: Bell,
    title: "Boletos perto do vencimento",
    description:
      "O financeiro é alertado quando o boleto está próximo de vencer, e a empresa recebe a notificação.",
  },
  {
    icon: Truck,
    title: "Entrega em andamento",
    description:
      "O cliente recebe mensagem automática quando o entregador sai para a entrega.",
  },
  {
    icon: CalendarClock,
    title: "Contas a pagar na data certa",
    description:
      "Avisos automáticos quando contas a pagar estão próximas do vencimento.",
  },
  {
    icon: PackageCheck,
    title: "Validade de produtos",
    description:
      "Alertas sobre produtos próximos do vencimento ou já vencidos.",
  },
];

const steps = [
  {
    title: "Conecte seu sistema",
    description:
      "Integre via API com autenticação segura e permissões configuráveis.",
  },
  {
    title: "Defina os eventos",
    description:
      "Escolha quais ações disparam notificações: compras, boletos, entregas e vencimentos.",
  },
  {
    title: "Automatize a comunicação",
    description:
      "As mensagens são enviadas automaticamente, mantendo clientes e equipes informados.",
  },
];

export function ApiIntegrationsSection() {
  return (
    <section
      id="api-integracoes"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] text-sm font-semibold mb-4">
            <Plug className="w-4 h-4" />
            API para integrações
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            Automatize processos com a{" "}
            <span className="text-[#0ea5e9]">API de integrações</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dispare notificações automáticas para clientes e equipes, reduzindo
            tarefas manuais e atrasos operacionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-10 items-start">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">
              Como funciona
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#0F172A]">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {automations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0F172A]/5 text-[#0F172A] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
