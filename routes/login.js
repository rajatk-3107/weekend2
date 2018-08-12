var dbLogin = require('../models/login')
var jwt = require('jsonwebtoken')

exports.register = (req, res, next) => {
    if (!req.body.name) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
            if (err) {
                next(err)
            } else if (!loginData || loginData == null) {
                new dbLogin({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }).save((err, savedData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Please try again later"
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "User registered"
                        })
                    }
                })
            } else {
                res.json({
                    success: false,
                    msg: "You have already registered."
                })
            }
        })
    }
}


exports.login = (req, res) => {
    dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
        if (err) {
            res.json({
                success: false,
                msg: "Error"
            })
        } else if (!loginData || loginData == null) {
            res.json({
                success: false,
                msg: "You have not registered"
            })
        } else if (loginData.password == req.body.password) {
            var token = jwt.sign({ email: loginData.email }, req.app.get('secretKey'), { expiresIn: "1h" })
            res.json({
                success: true,
                msg: "login successfull",
                token: token
            })
        } else {
            res.json({
                success: false,
                msg: "Password mismatch"
            })
        }
    })
}