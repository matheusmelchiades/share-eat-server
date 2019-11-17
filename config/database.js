require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.dev'
});

global.database = {};

module.exports = {
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    storage: `${process.cwd()}/${process.env.DB_STORAGE}/${process.env.DB_NAME}.sqlite`,
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    define: {
        timestamps: false,
        underscored: false,
        underscoredAll: false
    }
};
