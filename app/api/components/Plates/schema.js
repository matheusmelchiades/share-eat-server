const databaseMap = require('../.././../../database/fieldMap');
const DataTypes = global.database.dataTypes;

const schema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0
    },
    placeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: databaseMap.places.TABLE_NAME,
            key: 'id'
        }
    }
};

const options = {
    tableName: databaseMap.plates.TABLE_NAME
};

module.exports = { schema, options };
