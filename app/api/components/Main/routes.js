module.exports = [
    {
        path: '/',
        method: 'GET',
        handler: async (req, h) => {
            return { status: 'RUNNING' };
        }
    }
];
