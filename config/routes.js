const express = require('express')

module.exports = function(server){

    const api = express.Router()
    server.use('/api', api)

    const AutorService = require('../api/autores/autorService')
    AutorService.register(api, '/autores')
}