const queryDB = require('./db');

const getAllWardFromCity = (id) => (
    queryDB(`select * from "ward" where city_id = $1 `, [id])
);

module.exports = { getAllWardFromCity };