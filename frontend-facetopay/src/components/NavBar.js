// src/components/Navbar.js
import React, { useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="bg-900 text-white-200 px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <div className="flex items-center">
                    <img src={logo} alt="Facetopay Logo" className="h-10 w-auto" />
                </div>
            </div>

            {/* Menus */}
            <div className="hidden md:flex space-x-6">
                <a href="#home" className="hover:text-blue-400">
                    Para o Empreendedor
                </a>
                <a href="#sobre" className="hover:text-blue-400">
                    Para o usuário
                </a>
                <a href="#servicos" className="hover:text-blue-400">
                    Pricing
                </a>
                <a href="#contato" className="hover:text-blue-400">
                    Sobre Nós
                </a>
                {/* Botão Área do Cliente */}
                <a
                    href="#area-do-cliente"
                    className="hidden md:inline-block  bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Área do Cliente
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
