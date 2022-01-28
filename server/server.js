const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
require('dotenv').config();

const sequelize = require('./configs/database');
const {PORT} = require('./configs/config');
const router = require('./routes/index');
const errorHandlingMiddleware = require('./middleware/errorHandling.middleware')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')));

app.use('/api', router);
app.use('*', errorHandlingMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start().then();

