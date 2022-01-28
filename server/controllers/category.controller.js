const {Category} = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
    async create(req, res, next) {
        try {
            const {name} = req.body;
            const category = await Category.create({name});
            res.json(category)
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res, next) {
        try {
            console.log('test')
            const categories = await Category.findAll();
            return res.json(categories);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new CategoryController()
