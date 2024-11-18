const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Requisição recebida no backend:", req.body); // Verifica o corpo
  const { email } = req.body;

  if (!email) {
    console.log("Contato recebido:", email);
    return res.status(400).json({ message: "O email é obrigatório." });
  }

  console.log("Contato recebido:", email);

  res.status(200).json({ message: "Contato recebido com sucesso!" });
});

module.exports = router;
