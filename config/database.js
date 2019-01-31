const mongoose = require('mongoose')

module.export = mongoose.connect('mongodb://localhost/db_finance', { useNewUrlParser: true })


