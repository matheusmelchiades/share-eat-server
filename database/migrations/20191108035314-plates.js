const fieldMap = require('../fieldMap');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(fieldMap.plates.TABLE_NAME, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
                defaultValue: ''
            },
            price: {
                type: Sequelize.FLOAT,
                defaultValue: 0.0
            },
            placeId: {
                allowNull: false,
                type: Sequelize.INTEGER
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(fieldMap.plates.TABLE_NAME);
    }
};
