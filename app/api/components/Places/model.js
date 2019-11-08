const db = global.database;
const { schema, options } = require('./schema');
const factory = require('./factory');

/**
 *  MODELS
 */
const model = db.defineModel('place', schema, options);
const modelPlate = require('../Plates/model');

/**
 * ASSOCIATIONS
 */
model.hasMany(modelPlate, { foreignKey: 'placeId', as: 'plates' });

/**
 * CUSTOM FUNCTIONS
 */
model.findPaginate = async (page = 0, limit = 10, projection = '') => {
    const data = await model.findAndCountAll({
        limit,
        offSet: page * limit,
        include: 'plates',
        distinct: true
    });

    return factory[projection] ? factory[projection](data) : {};
};

module.exports = model;
