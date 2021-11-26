var Marca = require('../models/marcas.js');

function guardar(req, res) {
    try {
        let marca = new Marca()
        marca.descripcion = req.body.descripcion

        marca.save((err, marcaguardada) => {
            if (err) return res.status(400).send({mensaje:"Error al intentar guardar en la base de datos"})
            res.status(200).send({marca: marcaguardada})
        })
    } catch (error) {
        res.status(500).send({mensaje: "Error: " + error})
    }
}

function listar(req, res) {
    Marca.find({}, (err, marca) => {
        if (err) return res.status(500).send({mensaje: "Error al realizar la petición"})
        res.status(200).send({marca})
    })
}

function deleteMarca(req, res) {
    let id = req.params.id
    Marca.findById(id, (err, marca) => {
        if (err) return res.status(500).send({mensaje: "Error al realizar la petición"})
        if(!marca) return res.status(404).send({mensaje: "Error! la marca no existe"})

        marca.remove(err => {
            if(err) return res.status(500).send({mensaje: "Error al realizar la petición"})
            res.status(200).send({mensaje: "La marca ha sido eliminada"})
        })
    })
}

module.exports = {
    guardar,
    listar,
    deleteMarca
}