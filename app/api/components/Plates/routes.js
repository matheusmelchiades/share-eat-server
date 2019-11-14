const handler = require('./handler');
const joi = require('joi');

module.exports = [
    {
        path: '/place/{placeId}/plate',
        method: 'GET',
        handler: handler.getPlatesByPlace,
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
                        .optional()
                }
            }
        }
    }
];
