import { useNavigate } from "react-router-dom";

const Home = ({ apiUrl }) => {

  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };


  return (
    <div>
      <h1>Bem-vindo ao Home</h1>
      <p>O sistema está pronto para receber requisições POST.</p>
     
      <button onClick={goToContact} className="button">
        Ir para Contato
      </button>
    </div>
  );
};

export default Home;
