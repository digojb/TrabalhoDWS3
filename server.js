const express = require('express');
const bodyParser = require('body-parser');
const salasDeAulaRoutes = require('./routes/salasDeAula');

const app = express();
app.use(bodyParser.json());

app.use('/api/salas', salasDeAulaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
