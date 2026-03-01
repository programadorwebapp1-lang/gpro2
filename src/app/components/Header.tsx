import { BarChart3, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0F172A] to-[#0ea5e9] rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#0F172A]">GestãoPro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("funcionalidades")}
              className="text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("api-integracoes")}
              className="text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer"
            >
              API para integrações
            </button>
            <button
              onClick={() => scrollToSection("telas")}
              className="text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer"
            >
              Telas do Sistema
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-[#0ea5e9] transition-colors cursor-pointer"
            >
              Contato
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
                className="text-gray-700 hover:text-[#0ea5e9] transition-colors text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("funcionalidades")}
                className="text-gray-700 hover:text-[#0ea5e9] transition-colors text-left"
              >
                Funcionalidades
              </button>
              <button
                onClick={() => scrollToSection("api-integracoes")}
                className="text-gray-700 hover:text-[#0ea5e9] transition-colors text-left"
              >
                API para integrações
              </button>
              <button
                onClick={() => scrollToSection("telas")}
                className="text-gray-700 hover:text-[#0ea5e9] transition-colors text-left"
              >
                Telas do Sistema
              </button>
              <button
                onClick={() => scrollToSection("planos")}
                className="text-gray-700 hover:text-[#0ea5e9] transition-colors text-left"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-gray-700 hover:text-[#0ea5e9] transition-colors text-left"
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
