const glob = require('glob');
const Boom = require('boom');
const chalk = require('chalk');
const joi = require('joi');

const defaultRoute = {
    method: 'GET',
    handler: (request, h) => h.response(Boom.notImplemented()),
    config: {
        auth: false,
        plugins: {
            policies: []
        },
        tags: ['api']
    }
};

const register = async (server, options) => {
    let files = [];

    const globOptions = {
        nodir: true,
        strict: true
    };

    const joiHeader = joi.object({ authorization: joi.string().description('JWT token') }).unknown();

    options.routes.map(route => (files = files.concat(glob.sync(route, globOptions))));

    files.forEach(filePath => {
        let routes = null;

        try {
            routes = require(filePath);

            routes.forEach(r => {
                r = { ...defaultRoute, ...r };

                const route = {
                    ...defaultRoute,
                    ...r,
                    config: {
                        ...defaultRoute.config,
                        ...r.config,
                        plugins: {
                            ...defaultRoute.config.plugins,
                            ...r.config.plugins
                        }
                    }
                };

                if (route.config.auth) {
                    route.config.validate = route.config.validate || {};

                    route.config.validate.headers = joiHeader;
                }

                const isLogRoute = route.config.tags.some(tag => tag === 'log');

                if (isLogRoute && process.env.LOG_ROUTES !== 'visible') return route;

                server.route(route);

                server.log(['startup', 'route-load'], `${chalk.green(route.method)} ${route.path}`);

                return route;
            });
        } catch (error) {
            let err;

            if (routes && routes.length) {
                const route = routes.pop();

                err = `${chalk.red(route.method)} ${route.path} ${error.message}`;
            } else err = chalk.red(error.message);

            server.log(['startup', 'route-load', 'error'], err);
        }
    });
};

module.exports = {
    name: 'Routes',
    version: '1.0.0',
    register
};
