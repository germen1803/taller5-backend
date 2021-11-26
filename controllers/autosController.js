'use strict'

var Autos = require('../models/autos')

function guardar(req, res) {
    try {
        let autos = new Autos()
        autos.patente = req.body.patente
        autos.anio = req.body.anio
        autos.marca = req.body.idMarca

        autos.save((err, autosguardado) => {
            if (err) return res.status(400).send({mensaje:"Error al intentar guardar en la base de datos"})
            res.status(200).send({autos: autosguardado})
        })
    } catch (error) {
        res.status(500).send({mensaje: "Error: " + error})
    }
}

function listar2(req, res) {
    Autos.find({},(err, autos)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!autos) return res.status(404).send({message:'Error el auto no existe'})

        res.status(200).send({autos})
    })
}

function listar(req, res) {
    Autos.find()
    .populate('marcas').exec((err, autos)=>{
        res.status(200).send({autos})
    })
}

function deleteAuto(req, res) {
    let id = req.params.id
    Autos.findById(id, (err, auto) => {
        if (err) return res.status(500).send({mensaje: "Error al realizar la petición"})
        if(!auto) return res.status(404).send({mensaje: "Error! el auto no existe"})

        auto.remove(err => {
            if(err) return res.status(500).send({mensaje: "Error al realizar la petición"})
            res.status(200).send({mensaje: "El auto ha sido eliminado"})
        })
    })
}

function listarAutos(req, res) {

}



module.exports = {
    guardar,
    listar,
    deleteAuto
}