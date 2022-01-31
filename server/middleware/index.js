module.exports = {
    authMiddleware: require('./auth.middleware'),
    brandMiddleware: require('./brand.middleware'),
    categoryMiddleware: require('./category.middleware'),
    errorHandlingMiddleware: require('./errorHandling.middleware'),
    productMiddleware: require('./product.middleware'),
    userMiddleware: require('./user.middleware'),
    validDataMiddleware: require('./validData.middleware')
};
