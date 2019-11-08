const fieldMap = require('../fieldMap');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(fieldMap.places.TABLE_NAME, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(fieldMap.places.TABLE_NAME);
    }
};
