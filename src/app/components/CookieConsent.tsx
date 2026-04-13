import React, { useState, useEffect } from "react";

const COOKIE_NAME = "gpro2_consent";

export function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_NAME);
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_NAME, "accepted");
        setVisible(false);
    };

    return visible ? (
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-xl w-full flex flex-col sm:flex-row items-center gap-4 mx-4">
                <span className="text-gray-700 text-sm flex-1">
                    Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa
                    <a href="/termos-de-uso" className="text-blue-600 underline ml-1" target="_blank" rel="noopener noreferrer">Política de Cookies e Termos de Uso</a>.
                </span>
                <button
                    onClick={handleAccept}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Concordar
                </button>
            </div>
        </div>
    ) : null;
}
