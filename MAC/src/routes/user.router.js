const router = require('express-promise-router')()
const UserController = require('../controllers/usercontroller');
router.route('/create')
    .post(UserController.singupUser)
module.exports = router