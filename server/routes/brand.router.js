const router = require('express').Router();

const {BrandController} = require('../controllers')

router.post('/', BrandController.create);
router.get('/', BrandController.get);
router.delete('/', BrandController.delete);


module.exports = router;
