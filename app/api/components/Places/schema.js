const databaseMap = require('../.././../../database/fieldMap');
const DataTypes = global.database.dataTypes;

const schema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

const options = {
    tableName: databaseMap.places.TABLE_NAME
};

module.exports = { schema, options };
