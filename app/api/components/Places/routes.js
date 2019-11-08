const handler = require('./handler');
const joi = require('joi');

module.exports = [
    {
        path: '/place',
        method: 'GET',
        handler: handler.getPlaces,
        config: {
            validate: {
                query: {
                    page: joi
                        .number()
                        .integer()
                        .optional(),
                    limit: joi
                        .number()
                        .integer()
                        .optional(),
                    projection: joi.string().optional()
                }
            }
        }
    }
];
