class ProductController {
    async create(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
    async getAll(req, res, next) {
        try {
            res.status(200).json({message: 'working test'})
        } catch (e) {
            next(e)
        }
    }
    async getOne(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
    async update(req, res, next) {
        try {

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

module.exports = new ProductController()
