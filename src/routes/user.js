const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.route('/sign-up').post(userController.signup);

module.exports = router;
