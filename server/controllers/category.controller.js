const {Category} = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
    async create(req, res, next) {
        try {
            const {name} = req.body;
            const category = await Category.create({name});
            res.json(category)
        } catch (e) {
            next(e)
        }
    }
    async get(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CategoryController()
