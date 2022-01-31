const {User} = require('../models/models');
const ApiError = require('../error/ApiError');
const {DATA_EXIST, USER_NOT_FOUND, INVALID_TOKEN} = require('../error/response.message.enum')
const jwt = require("jsonwebtoken");
const {JWT_ACCESS_SECRET} = require("../configs/config");


module.exports = {
    checkUserExist: async (req, res, next) => {
        try {
            const userEmail = await User.findOne({where: {email: req.body.email}});

            if (userEmail) {
                return next(ApiError.forbidden(DATA_EXIST));
            }

            next();
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    },

    isUserPresent: async (req, res, next) => {
        try {
            const user = await User.findOne({where: {email: req.body.email}});
            console.log(user);
            if (!user) {
                return next(ApiError.internal(USER_NOT_FOUND));
            }

            req.user = user;
            next();
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    },

    checkUserRole: (role) => (req, res, next) => {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1]; // bearer token.....
            console.log(token);
            if (!token) {
                return next(ApiError.invalidClient(INVALID_TOKEN));
            }

            const decoded = jwt.verify(token, JWT_ACCESS_SECRET);

            if (decoded.role !== role) {
                return  res.status(403).json({message: 'access denite'})
            }
            req.user = decoded;
            next()
        } catch (e) {
            next(ApiError.invalidClient(INVALID_TOKEN))
        }
    }
}

