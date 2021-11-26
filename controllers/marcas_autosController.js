var Marcas_autos = require('../models/marcas_autos')

function guardarMarcas_autos(req, res, next) {
    let marcas_autos = new Marcas_autos()
    marcas_autos.autos = req.body.idAuto
    marcas_autos.marcas = req.body.idMarcas
    marcas_autos.save((err, marcas_autos) => {
        res.status(200).send({registroInsertado: marcas_autos})
    })
}

function listarTodos(req,res){
    Marcas_autos.find()
    .populate('autos', 'patente anio')
    .populate('marcas', 'descripcion')
    .exec((err, marcas_autos) => {
        res.status(200).send({ marcas_autos })
    })
}

function deleteMarca_autos(req, res) {
    let id = req.params.id
    Marcas_autos.findById(id, (err, marca) => {
        if (err) return res.status(500).send({mensaje: "Error al realizar la petición"})
        if(!marca) return res.status(404).send({mensaje: "Error! la marca no existe"})

        marca.remove(err => {
            if(err) return res.status(500).send({mensaje: "Error al realizar la petición"})
            res.status(200).send({mensaje: "La marca ha sido eliminada"})
        })
    })
}

module.exports = {
    guardarMarcas_autos,
    listarTodos,
    deleteMarca_autos
}