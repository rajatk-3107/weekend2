var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var config = require('./config/config.json')
mongoose.connect(config.mongo, (err, data) => {
    if (err) {
        console.log("Error Occured")
    } else {
        console.log("Database connected")
    }
})

var routes = require('./routes/routes')
app.use('/api', routes)

app.listen(4000, () => {
    console.log("Server Started.")
})