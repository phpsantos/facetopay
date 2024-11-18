import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = ({ apiUrl }) => {

  // Adicionando para usar efeitos do AOS em página
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };


  return (
    <div>
      <div className="bg-gray-100 p-4 rounded shadow-lg">
        <h1 className="text-xl font-bold text-blue-500">Bem-vindo ao Tailwind!</h1>
        <button onClick={goToContact} className="button">
          Ir para Contato
        </button>
      </div>
      <div>
        <section data-aos="fade-up" className="p-4 bg-blue-500 text-white">
          Este conteúdo aparecerá com animação de subida.
        </section>
        <section data-aos="fade-right" className="p-4 bg-green-500 text-white">
          Este conteúdo aparecerá com animação da direita.
        </section>
      </div>
      <div data-aos="fade-in" className="bg-gray-200 p-6 rounded shadow-md">
        Este é um exemplo de fade-in.
      </div>
      <div data-aos="zoom-in" className="bg-blue-500 p-6 text-white rounded shadow-md">
        Este é um exemplo de zoom-in.
      </div>
    </div>

  );
};

export default Home;
