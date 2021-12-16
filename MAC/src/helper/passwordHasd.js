const bcrypt = require('bcryptjs')
const encodePassword = async function(password) {
    try {
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt)
        console.log('parameterHashFunction: ', passwordHash)
        return passwordHash
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = {
    encodePassword
}