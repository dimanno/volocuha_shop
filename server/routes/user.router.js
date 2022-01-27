const router = require('express').Router();

const {UserController} = require('../controllers');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', UserController.check);

module.exports = router;
