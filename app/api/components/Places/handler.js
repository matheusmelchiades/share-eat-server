const model = require('./model');
const boom = require('boom');
const logger = require('../../../../engine/logger');

module.exports.getPlaces = async (req, h) => {
    try {
        const { page, limit, projection } = req.query;

        const placesDB = await model.findPaginate(page, limit, projection);

        return placesDB;
    } catch (error) {
        logger.error(error.message);

        return boom.badImplementation();
    }
};
