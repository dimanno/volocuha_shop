const ApiError = require('../error/ApiError');

module.exports = {
    checkValidDataMiddleware: (validator) => (req, res, next) => {
        try {
            const {error, value} = validator.validate(req.body);

            if (error) {
                throw new ApiError.badRequest(error.details[0].message);
            }

            req.body = value
            next()
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
};
