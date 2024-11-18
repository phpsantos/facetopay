// src/components/Navbar.js
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-gray-200 px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <div className="flex items-center">
                    <img src={logo} alt="Facetopay Logo" className="h-10 w-auto" />
                </div>
            </div>

            {/* Menus */}
            <div className="hidden md:flex space-x-6">
                <a href="#home" className="hover:text-blue-400">
                    Início
                </a>
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
        </nav>
    );
};

export default Navbar;
