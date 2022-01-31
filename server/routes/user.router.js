const router = require('express').Router();

const {UserController} = require('../controllers');
const {authMiddleware, userMiddleware, } = require('../middleware');

router.post('/registration', UserController.registration);
router.post('/login',
    userMiddleware.isUserPresent,
    authMiddleware.checkPasswordMatched,
    UserController.login);
router.get('/auth', authMiddleware.checkToken, UserController.check);

module.exports = router;
