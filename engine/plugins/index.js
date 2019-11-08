const good = require('good');

// PLUGINS
const routes = require('./routes');

const logSqueezeArgs = [
    {
        log: '*',
        response: '*',
        request: '*',
        'request-internal': '*'
    }
];

const getPlugins = () => {
    const plugins = [];

    plugins.push({
        plugin: good,
        options: {
            reporters: {
                console: [
                    {
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: logSqueezeArgs
                    },
                    {
                        module: 'good-console',
                        args: [
                            {
                                format: 'HH:mm:ss DD.MM.YYYY'
                            }
                        ]
                    },
                    'stdout'
                ],
                file: [
                    {
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: logSqueezeArgs
                    },
                    {
                        module: 'good-squeeze',
                        name: 'SafeJson'
                    }
                ]
            }
        }
    });

    // ROUTES
    plugins.push({
        plugin: routes,
        options: {
            routes: [`${process.cwd()}/app/api/components/**/*routes.js`]
        }
    });

    return plugins;
};

module.exports = server => {
    const AllPlugins = getPlugins();

    const promises = AllPlugins.map(plugin => server.register(plugin));

    return Promise.all(promises);
};
