const bunyan = require('bunyan');
const config = require('../config/logger');

let rotatingLogger = null;

function logger() {
    if (!rotatingLogger) {
        rotatingLogger = bunyan.createLogger(config.core_logging.options);
    }

    if (process.env.NODE_ENV === 'test') {
        rotatingLogger.level(bunyan.FATAL + 1);
    }

    return rotatingLogger;
}

module.exports = logger();
