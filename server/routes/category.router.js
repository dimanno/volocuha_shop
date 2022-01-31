const router = require('express').Router();

const {CategoryController} = require('../controllers');
const {userMiddleware} = require("../middleware");

router.post('/', userMiddleware.checkUserRole('ADMIN'), CategoryController.create);
router.get('/', CategoryController.getAll);

module.exports = router;
