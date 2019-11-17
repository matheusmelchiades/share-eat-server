const launcher = require('../../engine/launcher');
const helper = require('../helper');

describe('Plates', () => {
    let server;
    let factory;

    beforeAll(async () => {
        server = await launcher.init();

        await helper.delay(800);

        factory = require('../factory');
    });

    beforeEach(async () => {
        await global.database.truncate();
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
});
