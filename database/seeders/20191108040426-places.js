const places = require('../data/places.json');
const fieldMap = require('../fieldMap');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(fieldMap.places.TABLE_NAME, places);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(fieldMap.places.TABLE_NAME, null);
    }
};
