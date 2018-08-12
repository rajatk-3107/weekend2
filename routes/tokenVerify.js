var jwt = require('jsonwebtoken')

var tokenVerify = (req, res, next) => {
    // var abc = 'token'
    if (!req.headers['x-access']) {
        res.json({
            success: false,
            msg: "PLease login first"
        })
    } else {
        jwt.verify(req.headers['x-access'], 'secret', (err, decoded) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Unauthorized User"
                })
            } else {
                console.log(decoded)
                req.decoded = decoded;
                next();
            }
        })
    }
}
module.exports = tokenVerify