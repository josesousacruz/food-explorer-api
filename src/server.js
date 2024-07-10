const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('dotenv').config();

const app = express();


// Configurar CORS para permitir todas as origens
app.use(cors());

app.use(express.json());
app.use('/api', routes);  // Prefixo /api para todas as rotas

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
