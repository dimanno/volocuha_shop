module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',

    PORT: process.env.PORT || 5000,

    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'xxx',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'yyy'
}
