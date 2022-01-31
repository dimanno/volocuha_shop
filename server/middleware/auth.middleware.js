const jwt = require('jsonwebtoken');

const {compare} = require('../services/password.service');
const ApiError = require('../error/ApiError');
const {INVALID_TOKEN} = require('../error/response.message.enum');
const {jwtService} = require("../services");
const {ACCESS} = require("../const/tokenTypeAuth");
const {JWT_ACCESS_SECRET} = require("../configs/config");

module.exports = {
    checkPasswordMatched: async (req, res, next) => {
        try {
            const {password} = req.body;
            const {password: hashPassword} = req.user;
            console.log(hashPassword);
            console.log(password);
            const comparePassword = await compare(password, hashPassword);

            next();
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    },

    checkToken: (req, res, next) => {
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
            req.user = decoded;
            next()
        } catch (e) {
            next(ApiError.invalidClient(INVALID_TOKEN))
        }
    }
}


