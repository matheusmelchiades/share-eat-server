const launcher = require('../../engine/launcher');
const queryString = require('querystring');

describe('Places', () => {
    let server;
    let factory;

    beforeAll(async () => {
        server = await launcher.init();

        factory = require('../factory');
    });

    afterAll(async () => {
        await server.stop();
    });

    it('It should return status 200 if found router', async () => {
        const response = await server.inject({
            method: 'GET',
            url: '/place'
        });

        expect(response.statusCode).toBe(200);
    });

    it('It should return status 400 if send params invalids', async () => {
        const query = { SEND: true, PARAM: true, WRONG: true };

        const response = await server.inject({
            method: 'GET',
            url: `/place?${queryString.stringify(query)}`
        });

        expect(response.statusCode).toBe(400);
        expect(response.result).toHaveProperty('message');
        expect(response.result.message).toBe('Invalid request query input');
    });

    it('it should return a valid projection of listing places', async () => {
        const query = { page: 1, limit: 10, projection: 'listPlaces' };

        const response = await server.inject({
            method: 'GET',
            url: `/place?${queryString.stringify(query)}`
        });

        expect(response.statusCode).toBe(200);
        expect(response.result).toHaveProperty('count');
        expect(response.result).toHaveProperty('rows');
    });

    it('it should return data with projection valid of listing places', async () => {
        const query = { page: 1, limit: 10, projection: 'listPlaces' };

        const placesDb = await factory.create('place');

        await factory.createMany('plate', 10, { placeId: placesDb.id });

        const response = await server.inject({
            method: 'GET',
            url: `/place?${queryString.stringify(query)}`
        });

        expect(response.statusCode).toBe(200);
        expect(response.result).toHaveProperty('count');
        expect(response.result).toHaveProperty('rows');
        expect(response.result.count).toBe(1);
        expect(response.result.rows.length).toBe(1);
    });
});
