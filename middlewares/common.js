var jwt = require('jsonwebtoken')

var signtoken = function (obj) {
    return jwt.sign(obj, config.jwtsecret)
}

var verifytoken = function (token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, "secret12345", function (err, decoded) {
            if (err) {
                resolve(null)
            } else {
                resolve(decoded)
            }
        })
    })
}


module.exports = {
    signtoken: signtoken,
    verifytoken: verifytoken
}