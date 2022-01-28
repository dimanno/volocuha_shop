const joi = require('joi');

const {EMAIL_REGEXP, PASSWORD_REGEXP} = require('../const/regExp');

const authValidator = joi.object({
    email: joi
        .string()
        .max(30)
        .required()
        .regex(EMAIL_REGEXP),
    password: joi
        .string()
        .regex(PASSWORD_REGEXP)
        .required()
});

const emailValidator = joi.object({
    email: joi
        .string()
        .regex(EMAIL_REGEXP)
        .lowercase()
        .required(),
});

const passwordValidator = joi.object({
    password: joi
        .string()
        .regex(PASSWORD_REGEXP)
        .min(8)
        .max(128)
        .trim()
        .required()
});

module.exports = {
    authValidator,
    emailValidator,
    passwordValidator,
};
