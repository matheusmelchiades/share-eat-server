const db = global.database;
const { schema, options } = require('./schema');

/**
 *  MODELS
 */
const model = db.defineModel('plate', schema, options);

module.exports = model;
