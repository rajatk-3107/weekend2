var dbPerson = require('../models/person')

var viewPerson = (req, res) => {
    dbPerson.find({}, (err, persons) => {
        if (err) {
            res.json({
                success: false,
                msg: "Please try again after some time."
            })
        } else {
            res.json({
                success: true,
                msg: "ALl person details",
                person: persons
            })
        }
    })
}

module.exports = viewPerson