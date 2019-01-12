var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var config = require('./config/config.json')
global.tokenKey = config.key
mongoose.connect(config.mongo, (err, data) => {
    if (err) {
        console.log("Error Occured")
    } else {
        console.log("Database connected")
    }
})
app.set('secretKey', config.key)

var routes = require('./routes/routes')
app.use('/api', routes)

app.use(express.static(__dirname + '/dist'))
app.use((req, res) => {
    res.sendfile(__dirname + '/dist/index.html')
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started.")
})
