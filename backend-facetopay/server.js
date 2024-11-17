require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API do PayBy funcionando!");
});

// Rotas futuras
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);
