const model = require('./model');
const modelPlace = require('../Places/model');
const boom = require('boom');
const logger = require('../../../../engine/logger');

module.exports.getPlatesByPlace = async (req, h) => {
    try {
        const { placeId } = req.params;
        const { page, limit, projection } = req.query;

        const placeDb = await modelPlace.findOne({ where: { id: placeId } });

        if (placeDb) {
            const placesDB = await model.findPaginate(placeId, page, limit, projection);

            return placesDB;
        }

        return boom.badData('This id of place not exists');
    } catch (error) {
        logger.error(error.message);

        return boom.badImplementation();
    }
};

module.exports.createPlate = async (req, h) => {
    try {
        const { placeId, ...plate } = req.payload;

        const placeDb = await modelPlace.findOne({ where: { id: placeId } });

        if (placeDb && placeDb.id) {
            const newPlate = await model.create({ ...plate, placeId });

            return newPlate;
        }

        return boom.badData('Place not exists.');
    } catch (error) {
        logger.error(error.message);

        return boom.badImplementation();
    }
};
