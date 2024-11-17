import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contato</h1>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
