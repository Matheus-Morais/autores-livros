const Autor = require('./autor')
const _ = require('lodash')

Autor.methods(['get', 'post', 'put', 'delete'])
Autor.updateOptions({new: true, runValidators: true})
//new é usado para toda vez que ouver uma atualização é enviado como resultado da atualização, o novo objeto
//runValidators é usado para que seja realizada verificação dos componentes na hra da atuaçlização. ex: se é realmente string ou number 

module.exports = Autor