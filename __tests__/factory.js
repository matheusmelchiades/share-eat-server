const faker = require('faker');
const { factory } = require('factory-girl');

/**
 * MODELS
 */
const placeModel = require('../app/api/components/Places/model');
const plateModel = require('../app/api/components/Plates/model');

/**
 * Factory PLACES
 */
factory.define('place', placeModel, {
    name: faker.name.firstName()
});

/**
 * Factory PLATES
 */
factory.define('plate', plateModel, {
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    price: faker.commerce.price(),
    placeId: faker.random.number()
});

module.exports = factory;
