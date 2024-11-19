// src/components/AboutSection.js
import React from "react";
import logo_teste from "../assets/logo_teste.png"; // Substitua pelo caminho correto da imagem

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        {/* Texto à Esquerda */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            A Facetopay é uma solução de auto-pagamento direto da mesa para restaurantes.
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Com nossa plataforma, clientes verificam seus pedidos e realizam o pagamento pelo celular, eliminando a necessidade de chamar garçom e esperar pela maquininha.
          </p>
          <p className="text-lg text-gray-600">
            Com a Facetopay, você economiza até <span className="font-bold">15 minutos por mesa</span>: maior faturamento para seu restaurante, mais satisfação do cliente, e otimização de sua equipe.
          </p>
        </div>

        {/* Imagem à Direita */}
        <div className="flex-1">
          <img
            src={logo_teste}
            alt="Pagamento em restaurantes"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
