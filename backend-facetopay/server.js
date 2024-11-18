require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Middleware para permitir CORS
app.use(cors({ origin: process.env.FRONTEND_URL }));

// Middleware para interpretar o corpo das requisições JSON
app.use(express.json()); // Adicionado aqui

// Tratamento de erros globais
app.use((err, req, res, next) => {
  console.error("Erro inesperado:", err);
  res.status(500).json({ message: "Erro interno do servidor" });
});


// Porta e inicialização do servidor
const port = process.env.PORT || 3000;

// Rotas
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);


// Servidor Rodando
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`TESTANDO`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Erro: A porta ${port} já está em uso.`);
  }
});





