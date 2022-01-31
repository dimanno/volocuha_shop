const {Sequelize} = require('sequelize');
// const {path} = require("express/lib/application");
// const fs = require("fs");

module.exports = new Sequelize(
            process.env.BD_NAME,
            process.env.BD_USER,
            process.env.BD_PASSWORD,
            {
                dialect: 'postgres',
                host: process.env.BD_HOST,
                port: process.env.BD_PORT
            }
);

//other various connect configuration using patern singleton
// module.exports = () => {
//     let instance;
//
//     const initConnection = () => {
//         const client = new Sequelize(
//             process.env.BD_NAME,
//             process.env.BD_USER,
//             process.env.BD_PASSWORD,
//             {
//                 dialect: 'postgres',
//                 host: process.env.BD_HOST,
//                 port: process.env.BD_PORT
//             }
//         )
//         const models = {};
//         const modelsPath = path.join(process.cwd(), 'models');
//         const getModels = () => {
//             fs.readdir(modelsPath, (err, files) => {
//                 files.forEach((file) => {
//                     const [model] = file.split('.')
//                 })
//             })
//         }
//     };
//     return {
//         getInstance: () => {
//             if (instance) {
//                 instance = initConnection();
//             }
//         }
//     }
// }
