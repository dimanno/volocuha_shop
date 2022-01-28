const router = require('express').Router();

const {CategoryController} = require('../controllers');

router.post('/', CategoryController.create);
router.get('/', CategoryController.getAll);

module.exports = router;
