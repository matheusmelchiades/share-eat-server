/**
 * LISTING PLACES AND COUNT PLATE BY PLACE
 */
module.exports.listPlaces = places => ({
    count: places.count,
    rows: places.rows.map(row => ({
        ...row.dataValues,
        plates: row.plates.length
    }))
});
