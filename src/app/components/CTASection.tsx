import { MessageCircle, ArrowRight } from "lucide-react";

export function CTASection() {
  const openWhatsApp = () => {
    window.open("https://wa.me/5568992281187?text=Olá! Gostaria de conhecer o GestãoPro", "_blank");
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F172A] to-[#1e293b]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Comece agora a organizar seu negócio de{" "}
          <span className="text-[#0ea5e9]">forma inteligente</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Junte-se a centenas de empresas que já transformaram sua gestão com o GestãoPro.
          Entre em contato e receba uma demonstração gratuita.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={openWhatsApp}
            className="px-8 py-4 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-all shadow-lg hover:shadow-xl flex items-center gap-3 group cursor-pointerw"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com o Suporte
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="mailto:contato@gestaoprogp@gmail.com
"
            className="px-8 py-4 bg-white text-[#0F172A] rounded-lg hover:bg-gray-100 transition-all border-2 border-white"
          >
            Enviar Email
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#0ea5e9]" />
              <span>(68) 992281187</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>contato@gestaoprogp@gmail.com
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <span>⏰</span>
              <span>Seg - Sex: 8h às 18h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
