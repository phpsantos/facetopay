import { useNavigate } from "react-router-dom";

const Home = ({ apiUrl }) => {

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
    </div>
  );
};

export default Home;
