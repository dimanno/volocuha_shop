const ApiError = require("../error/ApiError");
const {NOT_FOUND} = require('../error/response.message.enum')

class UserController {
    async registration(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
    async login(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
    async check(req, res, next) {
        try {
            const {id} = req.query;
            if (!id) {
                return next(ApiError.badRequest(NOT_FOUND))
            }
            res.json(id);
            next();
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController()
