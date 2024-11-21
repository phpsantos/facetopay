import React from "react";
import AOS from "aos";

const HeroSection = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center">
                {/* Texto da Esquerda */}
                <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Turbine o seu faturamento <br /> e aumente sua rotatividade. - teste
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">
                        Integre teste soluções modernas de pagamento para transformar o potencial do seu negócio.
                    </p>
                </div>

                {/* Vídeo à Direita */}
                <div className="flex-1 relative">
                    {/* Layer do Vídeo */}
                    <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-gray-200 to-gray-50">
                        <iframe
                            className="w-full h-64 md:h-96 object-cover"
                            src="https://www.youtube.com/embed/Q2NBx01U9o8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Nova Seção Dentro do Hero */}
            <div className="mt-12 text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Onde tem Facetopay, você confere, divide e paga a conta pelo celular, sem esperar.
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Garantia de taxa menor do que a que paga na maquineta.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                    Clique no botão abaixo e teste o Facetopay com <span className="font-bold">0% de taxa</span> no primeiro mês.
                </p>

                {/* Botão */}
                <a
                    href="#teste-facetopay" // Substitua pelo link correto
                    className="inline-block bg-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
                >
                    Teste o Facetopay
                </a>

                {/* Setas */}
                <div className="mt-6 flex justify-left space-x-4">
                    <span className="text-2xl">👇</span>
                    <span className="text-2xl">👇</span>
                    <span className="text-2xl">👇</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
