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

            const token = jwtService.generateTokenPair(email, role);

            return res.json({token});

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    };

    async login(req, res, next) {
        try {
            const {role, email} = req.user
            const tokenPair = jwtService.generateTokenPair(email, role);

            return res.json({tokenPair});

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    };

    async check(req, res, next) {
        try {

            res.json({message: 'all right'});
            next();
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController()
