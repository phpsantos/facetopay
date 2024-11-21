import React from "react";
import { motion } from "framer-motion";

const HeroPage = () => {
    return (
        <div className="bg-white">
            <div className="relative isolate text-left">
                {/* Fundo decorativo */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>

                {/* Contêiner de texto e vídeo */}
                <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                        {/* Texto */}
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="flex-1"
                        >
                            <div className="text-left">
                                <h3 className="text-balance text-xl font-semibold tracking-tight text-gray-600 sm:text-5xl">
                                    Pagamentos através do rosto com diversas vantagens para o seu negócio e seus clientes!
                                </h3>
                                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                    fugiat veniam occaecat.
                                </p>
                                <div className="mt-10 flex items-center justify-left gap-x-6">
                                    <a href="/experimente-corrigir"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Experimente Grátis por 30 dias
                                    </a>
                                    <a href="/saiba-mais-corrigir" className="text-sm/6 font-semibold text-gray-900">
                                        Saiba Mais <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vídeo */}
                        <div className="flex-1 max-w-md lg:max-w-lg relative">
                            <div className="overflow-hidden rounded-lg shadow-lg aspect-[16/16]">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Vídeo de demonstração"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Outro fundo decorativo */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
