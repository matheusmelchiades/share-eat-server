const launcher = require('../../engine/launcher');

describe('FIRST', () => {
    let server;

    beforeEach(async () => {
        server = await launcher.init();
    });

    afterEach(async () => {
        await server.stop();
    });

    it('It should return success if found router', async () => {
        const response = await server.inject('/');

        expect(response.statusCode).toBe(200);
        expect(response.result.status).toBe('RUNNING');
    });

    it('It should return error if not found route', async () => {
        const response = await server.inject('/ERROR_ROUTE');

        expect(response.statusCode).toBe(404);
    });
});
