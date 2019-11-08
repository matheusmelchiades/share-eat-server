const db = global.database;
const { schema, options } = require('./schema');

/**
 *  MODELS
 */
const model = db.defineModel('place', schema, options);

module.exports = model;
