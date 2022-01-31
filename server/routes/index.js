const router = require('express').Router();

const categoryRouter = require('./category.router');
const brandRouter = require('./brand.router');
const productRouter = require('./product.router');
const userRouter = require('./user.router');

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/brand', brandRouter);
router.use('/product', productRouter);

module.exports = router;

