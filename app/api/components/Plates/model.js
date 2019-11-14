const db = global.database;
const { schema, options } = require('./schema');

/**
 *  MODELS
 */
const model = db.defineModel('plate', schema, options);

/**
 * CUSTOM FUNCTIONS
 */
model.findPaginate = (placeId, page = 0, limit = 10) => {
    return model.findAndCountAll({
        limit,
        offSet: page * limit,
        where: {
            placeId
        },
        attributes: {
            exclude: 'placeId'
        }
    });
};
module.exports = model;
