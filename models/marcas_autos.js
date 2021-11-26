'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Marcas_autosSchema = Schema (
    {
        autos: {type: Schema.ObjectId, ref: 'autos'},
        marcas: {type: Schema.ObjectId, ref: 'marcas'}
    }
)

module.exports = mongoose.model('marcas_autos', Marcas_autosSchema)