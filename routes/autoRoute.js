'use strict'

var express = require('express')

var autoController = require('../controllers/autosController')

var api = express.Router()

api.post('/autos', autoController.guardar)
api.get('/autos', autoController.listar)
api.delete('/autos/:id', autoController.deleteAuto)

module.exports = api;