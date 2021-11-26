'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var marcas_autosController = require('../controllers/marcas_autosController');
 
// Llamamos al router
var api = express.Router();
 
//  Guardar Autos
api.post('/marcas_autos', marcas_autosController.guardarMarcas_autos);
api.get('/marcas_autos', marcas_autosController.listarTodos);
api.delete('/marcas_autos/:id', marcas_autosController.deleteMarca_autos)

// Exportamos la configuración
module.exports = api;
