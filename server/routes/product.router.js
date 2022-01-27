const router = require('express').Router();

const {ProductController} = require('../controllers')

router.post('/', ProductController.create)
router.get('/', ProductController.getAll);
router.put('/', ProductController.update);
router.delete('/', ProductController.delete)

router.get('/:id', ProductController.getOne);


module.exports = router;
