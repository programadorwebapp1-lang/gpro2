import { BarChart3, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const sectionHref = `/#${id}`;
    if (location.pathname !== "/") {
      setMobileMenuOpen(false);
      navigate(sectionHref);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    } else {
      navigate(sectionHref);
    }
  };

  const goToVideoPage = () => {
    setMobileMenuOpen(false);
    navigate("/videos");
  };

  const isActivePage = (page: string) => {
    if (page === "videos") {
      return location.pathname === "/videos";
    }

    if (location.pathname !== "/") {
      return false;
    }

    if (!location.hash && page === "inicio") {
      return true;
    }

    return location.hash === `#${page}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Logo" className="w-15 h-15 rounded" />
            <span className="text-xl font-bold text-[#0F172A]">GestãoPro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer ${isActivePage("inicio") ? "text-[#0ea5e9] font-semibold" : ""}`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("funcionalidades")}
              className={`text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer ${isActivePage("funcionalidades") ? "text-[#0ea5e9] font-semibold" : ""}`}
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("api-integracoes")}
              className={`text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer ${isActivePage("api-integracoes") ? "text-[#0ea5e9] font-semibold" : ""}`}
            >
              API para integrações
            </button>
            <button
              onClick={() => scrollToSection("telas")}
              className={`text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer ${isActivePage("telas") ? "text-[#0ea5e9] font-semibold" : ""}`}
            >
              Telas do Sistema
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className={`text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer ${isActivePage("planos") ? "text-[#0ea5e9] font-semibold" : ""}`}
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className={`text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer ${isActivePage("contato") ? "text-[#0ea5e9] font-semibold" : ""}`}
            >
              Contato
            </button>
            <button
              onClick={goToVideoPage}
              className={`text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer ${isActivePage("videos") ? "text-[#0ea5e9] font-semibold" : ""}`}
            >
              Vídeos
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contato")}
              className="px-6 py-2.5 bg-[#0ea5e9] text-white rounded-lg hover:bg-[#0284c7] transition-colors shadow-md hover:shadow-lg cursor-pointer"
            >
              Solicitar Demonstração
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className={`text-gray-700 hover:text-[#0ea5e9] transition-colors text-left ${isActivePage("inicio") ? "text-[#0ea5e9] font-semibold" : ""}`}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("funcionalidades")}
                className={`text-gray-700 hover:text-[#0ea5e9] transition-colors text-left ${isActivePage("funcionalidades") ? "text-[#0ea5e9] font-semibold" : ""}`}
              >
                Funcionalidades
              </button>
              <button
                onClick={() => scrollToSection("api-integracoes")}
                className={`text-gray-700 hover:text-[#0ea5e9] transition-colors text-left ${isActivePage("api-integracoes") ? "text-[#0ea5e9] font-semibold" : ""}`}
              >
                API para integrações
              </button>
              <button
                onClick={() => scrollToSection("telas")}
                className={`text-gray-700 hover:text-[#0ea5e9] transition-colors text-left ${isActivePage("telas") ? "text-[#0ea5e9] font-semibold" : ""}`}
              >
                Telas do Sistema
              </button>
              <button
                onClick={() => scrollToSection("planos")}
                className={`text-gray-700 hover:text-[#0ea5e9] transition-colors text-left ${isActivePage("planos") ? "text-[#0ea5e9] font-semibold" : ""}`}
              >
                Planos
              </button>
              <button
                onClick={goToVideoPage}
                className={`text-gray-700 hover:text-[#0ea5e9] transition-colors text-left ${isActivePage("videos") ? "text-[#0ea5e9] font-semibold" : ""}`}
              >
                Vídeos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className={`text-gray-700 hover:text-[#0ea5e9] transition-colors text-left ${isActivePage("contato") ? "text-[#0ea5e9] font-semibold" : ""}`}
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="px-6 py-2.5 bg-[#0ea5e9] text-white rounded-lg hover:bg-[#0284c7] transition-colors shadow-md"
              >
                Solicitar Demonstração
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
