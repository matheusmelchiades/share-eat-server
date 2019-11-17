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
    },
    {
        path: '/plate',
        method: 'POST',
        handler: handler.createPlate,
        config: {
            validate: {
                payload: {
                    name: joi.string().required(),
                    price: joi.number().required(),
                    description: joi.string().required(),
                    placeId: joi.number().required()
                }
            }
        }
    }
];
