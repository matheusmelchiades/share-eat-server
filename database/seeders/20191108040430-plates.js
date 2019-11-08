const plates = require('../data/plates.json');
const fieldMap = require('../fieldMap');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(fieldMap.plates.TABLE_NAME, plates);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(fieldMap.plates.TABLE_NAME, null);
    }
};
