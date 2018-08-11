var express = require('express')
var app = express.Router()


var addPerson = require('./addPerson')
app.post('/addPerson', addPerson)

var viewPerson = require('./viewPerson')
app.get('/view', viewPerson)

var editPerson = require('./editPerson')
app.post('/edit', editPerson)

module.exports = app