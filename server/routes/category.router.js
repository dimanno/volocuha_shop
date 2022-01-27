const router = require('express').Router();

const {CategoryController} = require('../controllers');

router.post('/', CategoryController.create);
router.get('/', CategoryController.get);

module.exports = router;
