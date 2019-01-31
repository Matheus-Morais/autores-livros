const restfull = require('node-restful')
const mongoose = restfull.mongoose


const livroSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    paginas: {type: Number, min: 1, required: true}
})

const autorSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    livros: [livroSchema]
})

module.exports = restfull.model('Autor', autorSchema)