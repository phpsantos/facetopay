const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email é obrigatório.");
  }
  res.status(200).send("Contato enviado com sucesso!");
});

module.exports = router;
