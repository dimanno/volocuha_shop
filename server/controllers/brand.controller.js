const {Brand, Category} = require("../models/models");

class BrandController {
    async create(req, res, next) {
        try {
            const {name} = req.body;
            const brand = await Brand.create({name});
            res.json(brand)
        } catch (e) {
            next(e)
        }
    }
    async getAll(req, res, next) {
        try {
            const brands = await Brand.findAll();
            return res.json(brands);
        } catch (e) {
            next(e)
        }
    }
    async delete(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
}

module.exports = new BrandController()
