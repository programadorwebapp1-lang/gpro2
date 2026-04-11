import { useMemo, useState } from "react";
import { Play } from "lucide-react";
import dashboardVideo from "@/public/videos/dashboard-financeiro.mp4";
import dadosEmpresaVideo from "@/public/videos/dados-empresa.mp4";
import cadastroProdutosVideo from "@/public/videos/cadastro-produtos.mp4";
import listaProdutosVideo from "@/public/videos/lista-produtos.mp4";
import cuponsVideo from "@/public/videos/cupons-promocionais.mp4";
import vendedoresVideo from "@/public/videos/gerenciar-vendedores.mp4";
import entregadoresVideo from "@/public/videos/gerenciar-entregadores.mp4";
import entregasVideo from "@/public/videos/entregas.mp4";
import financeiroCardsVideo from "@/public/videos/financeiro-cards.mp4";
import estoqueCardsVideo from "@/public/videos/estoque-cards.mp4";
import estoqueVisualizarVideo from "@/public/videos/estoque-visualizar.mp4";
import estoqueMovimentacoesVideo from "@/public/videos/estoque-movimentacoes.mp4";
import compraProdutosFornecedoresVideo from "@/public/videos/compra-produtos-fornecedores.mp4";
import registrarVendaVideo from "@/public/videos/registrar-venda.mp4";
import aberturaCaixaVideo from "@/public/videos/abertura-caixa.mp4";
import suporteVideo from "@/public/videos/gerenciar-suporte.mp4";
import verParcelasVideo from "@/public/videos/ver-parcelas.mp4";
import boletoReceberVideo from "@/public/videos/boletos-receber.mp4";
import nfcEConfiguracoesVideo from "@/public/videos/nfc-e-configuracoes.mp4";
import clientesVideo from "@/public/videos/clientes.mp4";
import geralVideo from "@/public/videos/geral.mp4";

const videos = [
    {
        title: "Dashboard",
        category: "Dashboard",
        description: "Acompanhe o desempenho do seu negócio com gráficos e dashboards intuitivos.",
        src: dashboardVideo,
    },
    {
        title: "Dados da Empresa",
        category: "Empresa",
        description: "Gerencie as informações da sua empresa de forma fácil e organizada.",
        src: dadosEmpresaVideo,
    },
    {
        title: "Cadastro de produtos",
        category: "Produtos",
        description: "Mantenha seu catálogo atualizado com um sistema de cadastro simples e eficiente.",
        src: cadastroProdutosVideo,
    },
    {
        title: "Lista de produtos",
        category: "Produtos",
        description: "Visualize e gerencie todos os seus produtos em uma única lista.",
        src: listaProdutosVideo,
    },
    {
        title: "Cupons promocionais",
        category: "Marketing",
        description: "Crie e gerencie cupons promocionais para atrair e reter seus clientes.",
        src: cuponsVideo,
    },
    {
        title: "Gerencie Vendedores",
        category: "Equipe",
        description: "Adicione, remova e gerencie os vendedores da sua equipe de forma eficiente.",
        src: vendedoresVideo,
    },
    {
        title: "Gerencie entregador",
        category: "Equipe",
        description: "Adicione, remova e gerencie os entregadores da sua equipe de forma eficiente.",
        src: entregadoresVideo,
    },
    {
        title: "Gerencie suporte",
        category: "Equipe",
        description: "Adicione, remova e gerencie o suporte da sua equipe de forma eficiente.",
        src: suporteVideo,
    },
    {
        title: "Entregas",
        category: "Logística",
        description: "Acompanhe o status das entregas e gerencie os prazos de forma eficiente.",
        src: entregasVideo,
    },
    {
        title: "Financeiro cards",
        category: "Financeiro",
        description: "Acompanhe o desempenho financeiro do seu negócio com cartões de informações de cada tela.",
        src: financeiroCardsVideo,
    },
    {
        title: "Estoque cards",
        category: "Estoque",
        description: "Acompanhe o estoque do seu negócio com cartões de informações de cada produto.",
        src: estoqueCardsVideo,
    },
    {
        title: "Estoque visualizar",
        category: "Estoque",
        description: "Visualize o estoque do seu negócio de forma detalhada e organizada.",
        src: estoqueVisualizarVideo,
    },
    {
        title: "Estoque movimentações",
        category: "Estoque",
        description: "Acompanhe as movimentações do estoque do seu negócio de forma detalhada e organizada.",
        src: estoqueMovimentacoesVideo,
    },
    {
        title: "Compra de produto de fornecedores",
        category: "Estoque",
        description: "Gerencie as compras de produtos com seus fornecedores de forma eficiente.",
        src: compraProdutosFornecedoresVideo,
    },
    {
        title: "Registrar venda",
        category: "Vendas",
        description: "Registre novas vendas de forma rápida e eficiente.",
        src: registrarVendaVideo,
    },
    {
        title: "Abertura de caixa",
        category: "Financeiro",
        description: "Gerencie a abertura e fechamento do caixa com facilidade.",
        src: aberturaCaixaVideo,
    },
    {
        title: "Ver parcelas",
        category: "Financeiro",
        description: "Visualize e gerencie as parcelas das vendas de forma eficiente.",
        src: verParcelasVideo,
    },
    {
        title: "Boleto a receber",
        category: "Financeiro",
        description: "Gerencie os boletos a receber e acompanhe o status dos pagamentos.",
        src: boletoReceberVideo,
    },
    {
        title: "NFC-e, NF-e e Configurações de emissão",
        category: "Fiscal",
        description: "Configure a emissão de notas fiscais eletrônicas e acompanhe o status das emissões de forma eficiente.",
        src: nfcEConfiguracoesVideo,
    },
    {
        title: "Clientes",
        category: "Clientes",
        description: "Gerencie as informações dos seus clientes de forma fácil e organizada.",
        src: clientesVideo,
    },
    {
        title: "Geral",
        category: "Geral",
        description: "Visão geral do sistema e suas funcionalidades principais.",
        src: geralVideo,
    },
    {
        title: "Em breve mais vídeos",
        category: "Geral",
        description: "Estamos preparando mais vídeos para mostrar todas as funcionalidades do sistema. Fique ligado!",
        src: "",
    }
];

export function VideosSection() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [hiddenVideos, setHiddenVideos] = useState<string[]>([]);

    const categories = useMemo(
        () => ["Todos", ...Array.from(new Set(videos.map((video) => video.category)))],
        []
    );

    const filteredVideos = useMemo(
        () =>
            videos
                .filter(
                    (video) =>
                        selectedCategory === "Todos" || video.category === selectedCategory
                )
                .filter((video) => !hiddenVideos.includes(video.title)),
        [selectedCategory, hiddenVideos]
    );

    const toggleHidden = (title: string) => {
        setHiddenVideos((current) =>
            current.includes(title)
                ? current.filter((item) => item !== title)
                : [...current, title]
        );
    };

    const showAllVideos = () => setHiddenVideos([]);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-sm uppercase font-semibold tracking-[0.24em] text-[#0ea5e9]">
                        Demonstrações em vídeo
                    </p>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0F172A]">
                        Assista aos vídeos e veja o sistema em ação
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                        Explore as funcionalidades com vídeos curtos que mostram como usar o sistema no dia a dia.
                    </p>
                </div>

                <div className="mb-8 flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-full border px-4 py-2 text-sm font-medium cursor-pointer transition ${selectedCategory === category
                                ? "border-[#0ea5e9] bg-[#0ea5e9] text-white"
                                : "border-gray-200 bg-white text-[#0F172A] hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {hiddenVideos.length > 0 ? (
                    <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
                        <span>{hiddenVideos.length} vídeo(s) oculto(s)</span>
                        <button
                            type="button"
                            onClick={showAllVideos}
                            className="rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-[#0F172A] hover:bg-slate-50"
                        >
                            Mostrar todos
                        </button>
                    </div>
                ) : null}

                <div className="grid gap-8 lg:grid-cols-3">
                    {filteredVideos.map((video) => (
                        <div
                            key={video.title}
                            className="group bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden transition hover:shadow-lg"
                        >
                            <div className="relative overflow-hidden aspect-video bg-slate-100">
                                {video.src ? (
                                    <video
                                        src={video.src}
                                        controls
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center bg-slate-100 text-gray-500">
                                        Em breve...
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="mb-4 flex items-center justify-between gap-4">
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                        {video.category}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => toggleHidden(video.title)}
                                        className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
                                    >
                                        Ocultar
                                    </button>
                                </div>
                                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">{video.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{video.description}</p>
                                <a
                                    href={video.src || undefined}
                                    target={video.src ? "_blank" : undefined}
                                    rel={video.src ? "noreferrer" : undefined}
                                    onClick={(event) => {
                                        if (!video.src) {
                                            event.preventDefault();
                                        }
                                    }}
                                    className={`mt-6 inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium transition ${video.src
                                        ? "bg-[#0ea5e9] text-white hover:bg-[#0284c7]"
                                        : "cursor-not-allowed bg-slate-300 text-slate-600"
                                        }`}
                                >
                                    Assistir agora
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
