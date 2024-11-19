require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();


  // Adicione o esquema `https://` à origem permitida
const allowedOrigins = process.env.NODE_ENV === "production"
? [`https://${process.env.FRONTEND_URL}`, `https://www.${process.env.FRONTEND_URL}`] // Inclua o domínio com e sem "www"
: ["http://localhost:3000"]; // Origem local para desenvolvimento


app.use(cors({
  origin: (origin, callback) => {
    console.log("Origem da requisição:", origin);
    console.log("Origens permitidas:", allowedOrigins);
    console.log("Cheguei até aqui:");
    if (!origin || allowedOrigins.includes(origin)) {
      console.log("Passei aqui:");
      callback(null, true); // Permite a origem
    } else {
      console.log("Deu erro aqui!");
      callback(new Error("CORS não permitido para essa origem")); // Bloqueia a origem
    }
  },
  methods: "GET,POST,PUT,DELETE", // Métodos HTTP permitidos
  credentials: true, // Permite cookies/autenticação se necessário
}));



// Middleware para interpretar o corpo das requisições JSON
app.use(express.json()); // Adicionado aqui

// Tratamento de erros globais
app.use((err, req, res, next) => {
  console.error("Erro inesperado:", err);
  res.status(500).json({ message: "Erro interno do servidor" });
});

app.use((req, res, next) => {
  console.error("Página não encontrada:", err);
  res.status(404).json({ message: "Página não encontrada" });
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





