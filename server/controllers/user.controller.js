const ApiError = require("../error/ApiError");
const {NOT_FOUND} = require('../error/response.message.enum');
const {passwordService, jwtService} = require('../services');
const {User, Basket} = require('../models/models');

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, role} = req.body;
            const hashPassword = await passwordService.hash(password);

            const user = await User.create({email, role, password: hashPassword});
            const basket = await Basket.create({userId: user.id});

            const token = jwtService.generateTokenPair();

            return res.json({token});

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    };

    async login(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    };

    async check(req, res, next) {
        try {
            const {id} = req.query;
            if (!id) {
                return next(ApiError.notFound(NOT_FOUND))
            }
            res.json(id);
            next();
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController()
