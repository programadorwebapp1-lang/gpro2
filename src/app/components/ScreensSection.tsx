import { useEffect, useState } from "react";
import vendaImg from "@/assets/screens/venda.png";
import caixaImg from "@/assets/screens/caixa.png";
import caixaAbertoImg from "@/assets/screens/caixa_aberto.png";
import estoqueImg from "@/assets/screens/estoque.png";
import estoqueMovimentacaoImg from "@/assets/screens/estoque_movimentacao.png";
import relatorioImg from "@/assets/screens/relatorio.png";
import graficosImg from "@/assets/screens/graficos_aberto.png";
import cupomImg from "@/assets/screens/cupom.png";
const screens = [
  {
    title: "Tela de Vendas",
    description: "Interface intuitiva para registrar vendas rapidamente. Adicione produtos, aplique descontos e finalize com múltiplas formas de pagamento.",
    image: vendaImg,

  },
  {
    title: "Gestão de Estoque",
    description: "Controle completo do seu inventário. Visualize produtos em estoque, receba alertas de baixa quantidade e gerencie fornecedores.",
    image: estoqueImg,
  },
  {
    title: "Movimentação de Estoque",
    description: "Visualiza entradas e saídas de produtos, acompanhe transferências entre suas vendas e mantenha seu estoque sempre atualizado.",
    image: estoqueMovimentacaoImg,
  },
  {
    title: "Dashboard Financeiro",
    description: "Acompanhe o desempenho do seu negócio em tempo real. Gráficos detalhados de vendas, lucro, despesas e muito mais.",
    image: relatorioImg,
    modalImages: [relatorioImg, graficosImg],
  },
  {
    title: "Sistema de Cupons",
    description: "Crie campanhas promocionais e gerencie cupons de desconto. Aumente suas vendas com ofertas estratégicas.",
    image: cupomImg,
  },
  {
    title: "Tela de Caixas",
    description: "Abertua e fechamento de caixas, controle de fluxo de caixa e registro de movimentações financeiras. Tudo para manter suas finanças organizadas.",
    image: caixaAbertoImg,
    modalImages: [caixaImg, caixaAbertoImg],
  }
];

export function ScreensSection() {
  const [activeScreen, setActiveScreen] = useState<(typeof screens)[number] | null>(null);

  useEffect(() => {
    if (!activeScreen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveScreen(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeScreen]);

  return (
    <section id="telas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            Conheça as <span className="text-[#0ea5e9]">telas do sistema</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interface moderna, limpa e fácil de usar. Tudo pensado para sua produtividade.
          </p>
        </div>

        {/* Screens Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => setActiveScreen(screen)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setActiveScreen(screen);
                }
              }}
            >
              <div className="relative overflow-hidden aspect-video bg-[#f1f5f9]">
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="w-full h-full object-contain transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {screen.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {screen.description}
                </p>
                <p className="mt-4 text-sm font-medium text-[#0ea5e9]">
                  Clique na tela para ver a imagem melhor.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeScreen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${activeScreen.title}`}
          onClick={() => setActiveScreen(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-black/20 rounded-2xl p-2 sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-1 cursor-pointer right-2 sm:right-4 sm:-top-1 h-10 w-10 rounded-full bg-white/90 text-[#0F172A] shadow-lg hover:bg-white transition"
              onClick={() => setActiveScreen(null)}
              aria-label="Fechar imagem ampliada"
            >
              ✕
            </button>
            {activeScreen.modalImages?.length ? (
              <div className="flex flex-col gap-4">
                {activeScreen.modalImages.map((image, imageIndex) => (
                  <img
                    key={`${activeScreen.title}-${imageIndex}`}
                    src={image}
                    alt={`${activeScreen.title} ${imageIndex + 1}`}
                    className="w-full h-full max-h-[70vh] object-contain rounded-xl bg-[#0b1220]"
                  />
                ))}
              </div>
            ) : (
              <img
                src={activeScreen.image}
                alt={activeScreen.title}
                className="w-full h-full max-h-[82vh] object-contain rounded-xl"
              />
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
