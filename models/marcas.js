'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MarcasSchema = Schema(
    {
        descripcion: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('marcas', MarcasSchema)