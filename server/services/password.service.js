const bcrypt = require('bcrypt');
const ApiError = require('../error/ApiError');
const {WRONG_LOGIN_DATA} = require('../error/response.message.enum');

module.exports = {
    hash: password => bcrypt.hash(password, 10),

    compare: async (password, hashPassword) => {
        const isPasswordMatched = await bcrypt.compare(password, hashPassword);

        if (!isPasswordMatched) {
            throw new Error(WRONG_LOGIN_DATA);
        }
    }
}
