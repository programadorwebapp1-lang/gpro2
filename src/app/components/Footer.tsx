import { BarChart3 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">GestãoPro</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sistema completo de gestão para pequenas e médias empresas.
              Controle suas vendas, estoque e financeiro de forma simples e eficiente.
            </p>
            <div className="flex gap-4">
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="hover:text-[#0ea5e9] transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("funcionalidades")}
                  className="hover:text-[#0ea5e9] transition-colors cursor-pointer"
                >
                  Funcionalidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("telas")}
                  className="hover:text-[#0ea5e9] transition-colors cursor-pointer"
                >
                  Telas do Sistema
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("planos")}
                  className="hover:text-[#0ea5e9] transition-colors cursor-pointer"
                >
                  Planos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span>📱</span>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <a href="tel:+5568992281187" className="hover:text-[#0ea5e9] transition-colors">
                    (68) 992281187
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:gestaoprogp@gmail.com
" className="hover:text-[#0ea5e9] transition-colors">
                    gestaoprogp@gmail.com

                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>⏰</span>
                <div>
                  <p className="text-sm text-gray-400">Horário</p>
                  <p>Seg - Sex: 8h às 18h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} GestãoPro. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-[#0ea5e9] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-[#0ea5e9] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
