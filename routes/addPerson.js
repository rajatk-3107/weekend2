var dbPerson = require('../models/person')
var addPerson = (req, res) => {
    if (!req.body.name || !req.body.age || !req.body.email) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        new dbPerson({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            createdBy: req.decoded.email
        }).save((err, savedData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wrong",
                    error: err
                })
            } else {
                res.json({
                    success: true,
                    msg: "Data saved",
                    data: savedData
                })
            }
        })
    }
}

module.exports = addPerson