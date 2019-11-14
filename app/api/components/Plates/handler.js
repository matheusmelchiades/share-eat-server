const model = require('./model');
const modelPlace = require('../Places/model');
const boom = require('boom');
const logger = require('../../../../engine/logger');

module.exports.getPlatesByPlace = async (req, h) => {
    try {
        const { placeId } = req.params;
        const { page, limit, projection } = req.query;

        const placeDb = await modelPlace.findOne({ where: { id: placeId } });

        if (!placeDb) return boom.badData({ message: 'This id of place not exists' });

        const placesDB = await model.findPaginate(placeId, page, limit, projection);

        return placesDB;
    } catch (error) {
        logger.error(error.message);

        if (!error.isBoom) throw boom.boomify(error);

        return boom.badImplementation();
    }
};
