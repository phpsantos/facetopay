import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState(""); // Gerenciar o estado do campo de email
  const [message, setMessage] = useState(""); // Para exibir o status da requisição

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o reload da página

   console.log("Enviando email:", email); // Log no console do navegador

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Envia o email no corpo da requisição
      });

      // Pega o objeto de resposta.
      const data = await response.json();
      
      if (response.ok) {
        console.log("Contato recebido:", response.ok); // Log no console do navegador
        setMessage(data.message);
        setEmail(""); // Limpa o campo de email
      } else {
       
       console.error("O que chegou de resposta:", data.message); // Log no console do navegador
       setMessage(data.message);
      }

    } catch (error) {
      console.log("Erro ao conectar com a API:", error); // Log no console do navegador
      setMessage("Erro geral ao enviar o contato.");
    }
  };

  return (
    <div>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
        />
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>} {/* Exibe mensagem de status */}
    </div>
  );
};

export default Contact;
