require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? `${process.cwd()}/.env.test` : `${process.cwd()}/.env`
});

global.database = {};

module.exports = {
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT || 'sqlite',
    storage:
        `${process.cwd()}/${process.env.DB_STORAGE || '__tests__'}` /** PATH TO STORAGE  **/ +
        `${process.env.DB_NAME || 'database'}.sqlite` /** DATABASE NAME  **/,
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    define: {
        timestamps: false,
        underscored: false,
        underscoredAll: false
    }
};
