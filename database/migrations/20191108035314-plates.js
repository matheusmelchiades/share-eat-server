'use strict';

const TABLE_NAME = 'plates';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(TABLE_NAME, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
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
                type: Sequelize.INTEGER,
                references: {
                    model: 'places',
                    key: 'id'
                }
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(TABLE_NAME);
    }
};
