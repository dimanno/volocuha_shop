const {User} = require('../models/models');
const ApiError = require('../error/ApiError');
const {DATA_EXIST} = require('../error/response.message.enum')


module.exports = {
    checkUserExist: async (req, res, next) => {
        try {
            const userEmail = await User.findOne({where: {email: req.body.email}});

            if (userEmail) {
                throw new ApiError.forbidden(DATA_EXIST);
            }

            next();
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

