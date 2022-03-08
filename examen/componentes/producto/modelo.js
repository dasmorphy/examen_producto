const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString = {
    type: String,
    required: true,
}

const reqNumber = {
    type: Number,
    required: true,
}

const productoSchema = new Schema({
    serie: reqString,
    stock: reqNumber,
    nombre: reqString,
    valor: reqNumber,

})

const model = mongoose.model('Producto', productoSchema)
module.exports = model
