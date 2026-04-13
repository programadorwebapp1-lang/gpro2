import React from "react";

export default function TermosDeUso() {
    return (
        <div className="max-w-3xl mx-auto py-16 px-4 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
            <p className="mb-4">Estes Termos de Uso regulam o acesso e uso do sistema GestãoPro.</p>
            <h2 className="text-xl font-semibold mt-6 mb-2">1. Aceitação dos Termos</h2>
            <p className="mb-4">Ao utilizar o GestãoPro, você concorda com estes Termos de Uso.</p>
            <h2 className="text-xl font-semibold mt-6 mb-2">2. Uso do Sistema</h2>
            <ul className="list-disc ml-6 mb-4">
                <li>O usuário deve fornecer informações verdadeiras.</li>
                <li>É proibido utilizar o sistema para fins ilícitos.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-2">3. Propriedade Intelectual</h2>
            <p className="mb-4">Todo o conteúdo do GestãoPro é protegido por direitos autorais.</p>
            <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitação de Responsabilidade</h2>
            <p className="mb-4">Não nos responsabilizamos por danos decorrentes do uso indevido do sistema.</p>
            <h2 className="text-xl font-semibold mt-6 mb-2">5. Alterações nos Termos</h2>
            <p className="mb-4">Podemos alterar estes termos a qualquer momento. Notificaremos sobre mudanças significativas.</p>
            <h2 className="text-xl font-semibold mt-6 mb-2">6. Contato</h2>
            <p>Em caso de dúvidas, entre em contato pelo e-mail: <a href="mailto:gestaoprogp@gmail.com" className="text-blue-600 underline">gestaoprogp@gmail.com</a></p>
        </div>
    );
}
