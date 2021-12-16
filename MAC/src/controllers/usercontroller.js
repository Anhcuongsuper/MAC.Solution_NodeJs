const User = require('../models/user')
const { encodePassword } = require('../helper/passwordHasd')
const singupUser = async(req, res, next) => {
    const {
        firstName,
        lastName,
        userName,
        password,
        email,
        address,
        phoneNumber,
        facebookID,
        googleID,
        authType,
    } = req.body
    encodePassword.then(function(result) {
        req.body.password = result
    })
    const newUser = new User(req.body)
    await newUser.save()
    return res.status(201).json({ userId: newUser })
}
module.exports = {
    singupUser
}