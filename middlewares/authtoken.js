var common = require('./common')

module.exports = function (req, res, next) {
    var token = req.headers['token']
    if (token) {
        common.verifytoken(token).then((data) => {
            if (data) {
                req.decoded = data
                next()
            } else {
                res.send({
                    status: 0,
                    type: 'err',
                    message: 'Invalid token, please log in again',
                })
            }
        })
    } else {
        res.send({
            status: 0,
            type: 'err',
            message: 'no token',
        })
    }
}