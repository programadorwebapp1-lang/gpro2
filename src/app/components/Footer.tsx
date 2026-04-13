import { useNavigate, useLocation } from "react-router-dom";
export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const sectionHref = `/#${id}`;
    if (location.pathname !== "/") {
      navigate(sectionHref);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(sectionHref);
    }
  };

  const goToVideoPage = () => {
    navigate("/videos");
  };

  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2">
                <img src="/favicon.png" alt="Logo" className="w-15 h-15 rounded" />
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
            <ul className="space-y-2">
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
                  onClick={() => scrollToSection("api-integracoes")}
                  className="hover:text-[#0ea5e9] transition-colors cursor-pointer"
                >
                  API para integrações
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
              <li>
                <button
                  onClick={goToVideoPage}
                  className="hover:text-[#0ea5e9] transition-colors cursor-pointer"
                >
                  Vídeos
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
              <a
                href="/politica-de-privacidade"
                className="hover:text-[#0ea5e9] transition-colors"
                onClick={e => {
                  e.preventDefault();
                  navigate("/politica-de-privacidade");
                }}
              >
                Política de Privacidade
              </a>
              <a
                href="/termos-de-uso"
                className="hover:text-[#0ea5e9] transition-colors"
                onClick={e => {
                  e.preventDefault();
                  navigate("/termos-de-uso");
                }}
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
