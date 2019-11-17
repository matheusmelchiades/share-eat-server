const launcher = require('../../engine/launcher');
const queryString = require('querystring');
const helper = require('../helper');

describe('Plates', () => {
    let server;
    let factory;

    beforeAll(async () => {
        server = await launcher.init();

        await helper.delay(800);

        factory = require('../factory');
    });

    afterAll(async () => {
        await server.stop();
    });

    it('It should return status 200 if found router', async () => {
        const placeDb = await factory.create('place');

        const response = await server.inject({
            method: 'GET',
            url: `/place/${placeDb.id}/plate`
        });

        expect(response.statusCode).toBe(200);
    });

    it('It should return status 422 if not found router', async () => {
        const response = await server.inject({
            method: 'GET',
            url: `/place/9999/plate`
        });

        expect(response.statusCode).toBe(422);
        expect(response.result).toHaveProperty('message');
        expect(response.result.message).toBe('This id of place not exists');
    });

    it('It should return data of a new plate created', async () => {
        const placeDb = await factory.create('place');

        const response = await server.inject({
            method: 'POST',
            url: `/plate`,
            payload: {
                name: 'NEW PLATE',
                description: 'THIS IS A NEW PLATE',
                price: 20000,
                placeId: placeDb.id
            }
        });

        expect(response.statusCode).toBe(200);
        expect(response.result).toHaveProperty('id');
        expect(response.result).toHaveProperty('name');
        expect(response.result).toHaveProperty('description');
        expect(response.result).toHaveProperty('price');
        expect(response.result).toHaveProperty('placeId');
    });

    it('it should return error on create a new plate if place not exists', async () => {
        const response = await server.inject({
            method: 'POST',
            url: `/plate`,
            payload: {
                name: 'NEW PLATE',
                description: 'THIS IS A NEW PLATE',
                price: 20000,
                placeId: 999999999
            }
        });

        expect(response.statusCode).toBe(422);
        expect(response.result.message).toBe('Place not exists.');
    });
});
