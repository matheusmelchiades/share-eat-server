const bunyan = require('bunyan');

const LOG_FOLDER = './logs';

const noTest = process.env.NODE_ENV !== 'test';
const noDevelopment = process.env.NODE_ENV !== 'development';

module.exports = {
    // logging settings
    core_logging: {
        // destination folder
        folder: `${LOG_FOLDER}`,

        // bunyan options
        options: {
            // log reference
            name: 'core',

            serializers: bunyan.stdSerializers,

            // output streams
            streams: [
                noTest
                    ? {
                          stream: process.stdout,
                          level: 'debug'
                      }
                    : undefined
            ].filter(log => !!log),
            createFile: noTest && noDevelopment
        }
    }
};
