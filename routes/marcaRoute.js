'use strict'

var express = require('express')

var marcaController = require('../controllers/marcasController')

var api = express.Router()

api.post('/marcas', marcaController.guardar)
api.get('/marcas', marcaController.listar)
api.delete('/marcas/:id', marcaController.deleteMarca)

module.exports = api;