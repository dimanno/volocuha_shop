const jwt = require('jsonwebtoken');
const {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET} = require('../configs/config');
const {ACCESS} = require('../const/tokenTypeAuth');
const ApiError = require('../error/ApiError');

module.exports = {
    generateTokenPair: (email, role) => {
        const access_token = jwt.sign({email, role}, JWT_ACCESS_SECRET, {expiresIn: '30m'});
        const refresh_token = jwt.sign({email, role}, JWT_REFRESH_SECRET, {expiresIn: '30m'});

        return {
            access_token,
            refresh_token
        };
    },

    verifyToken: async (token, tokenType = ACCESS) => {
        try {
            const secret = tokenType === ACCESS ? JWT_ACCESS_SECRET : JWT_REFRESH_SECRET;
            await jwt.verify(token, secret);
        } catch (e) {
            throw new Error('invalid token');
        }
    }
}
