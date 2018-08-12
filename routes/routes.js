var express = require('express')
var app = express.Router()
var tokenVerify = require('./tokenVerify')


var addPerson = require('./addPerson')
app.post('/addPerson', tokenVerify, addPerson)

var viewPerson = require('./viewPerson')
app.get('/view', tokenVerify, viewPerson)

var editPerson = require('./editPerson')
app.post('/edit', tokenVerify, editPerson)

var registerLogin = require('./login')
app.post('/register', registerLogin.register)
app.post('/login', registerLogin.login)


app.use((err, req, res) => {
    if (err.code == 101) {
        res.json({

        })
    }
})

module.exports = app