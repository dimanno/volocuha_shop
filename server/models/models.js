const {DataTypes} = require('sequelize')

const sequelize = require('../configs/database');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
});

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

});

const BasketProduct = sequelize.define('basketDevice', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

});

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    img: {type: DataTypes.STRING}
});

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,unique: true, allowNull: false}
});

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.INTEGER, allowNull: false}
});

const ProductInfo = sequelize.define('ProductInfo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
});
// intermediate table

const CategoryBrand = sequelize.define( 'categoryBrand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
Product.belongsTo(Basket);

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product)

Product.hasMany(ProductInfo, {as: 'info'});
ProductInfo.belongsTo(Product);

Category.belongsToMany(Brand, {through: CategoryBrand});
Brand.belongsToMany(Category, {through: CategoryBrand});

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product, ProductInfo,
    Category,
    Brand,
    CategoryBrand,
    Rating
}
