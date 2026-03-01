import { ArrowRight, CheckCircle } from "lucide-react";
import dashboardImg from "@/public/dahsboard.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                Controle total das suas <span className="text-[#0ea5e9]">vendas, estoque</span> e{" "}
                <span className="text-[#0ea5e9]">financeiro</span> em um só sistema
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Simplifique a gestão do seu negócio com uma plataforma completa,
                moderna e fácil de usar. Ideal para comércios, lojas, farmácias e mercados.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                <span className="text-gray-700">Controle de vendas em tempo real</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                <span className="text-gray-700">Gestão automática de estoque</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                <span className="text-gray-700">Relatórios financeiros completos</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("funcionalidades")}
                className="px-8 py-4 bg-[#0ea5e9] text-white rounded-lg hover:bg-[#0284c7] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
              >
                Conhecer o Sistema
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("telas")}
                className="px-8 py-4 bg-white text-[#0F172A] border-2 border-gray-200 rounded-lg hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition-all cursor-pointer"
              >
                Ver Demonstração
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-4">
              {/* Social Proof
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">500+</div>
                <div className="text-sm text-gray-600">Empresas confiam</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              */}
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">24/7</div>
                <div className="text-sm text-gray-600">Suporte</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src={dashboardImg}
                alt="Dashboard do Sistema"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-5 right-31 bg-white rounded-lg shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-4 top-5">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Vendas do Dia</div>
                  <div className="text-lg font-bold text-[#0F172A]">R$ 5.000</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl" >📦</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Produtos</div>
                  <div className="text-lg font-bold text-[#0F172A]">15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
