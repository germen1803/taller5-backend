'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AutosSchema = Schema (
    {
        patente: {
            type: String,
            required: true
        },
        anio: {
            type: Number,
            required: true
        },
        marca: {type: Schema.ObjectId, ref: 'marcas'}
    }
)

module.exports = mongoose.model('autos', AutosSchema)