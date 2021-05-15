const express = require('express')
const app = express()

const routes = require('./routes');

// middleware para aceitar dados no formato json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(routes);

app.listen(3000, () => {
  console.log(`Servidor Node.js em execução...`)
})