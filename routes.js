const express = require('express')
const routes = express.Router()

const CarroController = require('./controllers/CarroController')

routes.get('/carros', CarroController.index)
      .post('/carros', CarroController.store);

module.exports = routes
