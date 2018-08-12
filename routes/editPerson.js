var dbPerson = require('../models/person')

var edit = (req, res) => {
    if (!req.body.personId || !req.body.name || !req.body.age) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        dbPerson.findOneAndUpdate({ _id: req.body.personId, createdBy: req.decoded.email }, {
            $set: { name: req.body.name, age: req.body.age }
        }, (err, updated) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wrong."
                })
            } else {
                res.json({
                    success: true,
                    msg: "Data updated"
                })
            }
        })
    }

}

module.exports = edit