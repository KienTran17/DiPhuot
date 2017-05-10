const { getAllWardFromCity } = require('../../model/ward');

module.exports = (req, res) => {
    const {id} = req.body;
    getAllWardFromCity(id).then(kq => res.send(kq.rows));
}