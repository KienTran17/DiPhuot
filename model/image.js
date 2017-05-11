const queryDB = require('./db');

const insertImage = (name, link, view, like, user_id, place_id, date) => (
    queryDB(`insert into "image" (name, link, view, "like", user_id, place_id, date_create)`, [name, link, view, like, user_id, place_id, date])
);

module.exports = { insertImage };