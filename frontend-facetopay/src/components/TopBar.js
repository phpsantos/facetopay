// src/components/TopBar.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const TopBar = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-gray-900 text-gray-200 text-sm py-2 px-4 flex justify-between items-center" data-aos="fade-down">
            {/* Fale conosco */}
            <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <a href="mailto:contato@facetopay.app" className="text-blue-400 hover:underline">
                    contato@facetopay.app
                </a>
            </div>

            {/* Menu adicional */}
            <div className="flex items-center space-x-4">
                <a href="#sobre" className="hover:text-blue-400">
                    Sobre
                </a>
                <a href="#servicos" className="hover:text-blue-400">
                    Serviços
                </a>
                <a href="#contato" className="hover:text-blue-400">
                    Contato
                </a>
            </div>
        </div>
    );
};

export default TopBar;
