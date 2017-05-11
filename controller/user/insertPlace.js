const getArrayUpload = require('../../upload.js');
const { verify } = require('../../config/jwt');
const { sign } = require('../../config/jwt');
const { insertImage } = require('../../model/image');
const cookieParser = require('cookie-parser');
const { getUserByUsername } = require('../../model/user');
const {  } = require('../../model/place');

const todaysDate = new Date();

function convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split('');
    var ddChars = dd.split('');

    return yyyy + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + (ddChars[1] ? dd : "0" + ddChars[0]);
}

module.exports = (req, res) => {
    const username = req.session.username;
    const { txtNamePlace, cbTreckking, camping, seeView, cbClaimb, txtAddress, cityId, provinceId, txtDesPlace } = req.body;
    getArrayUpload("image")(req, res, function (err) {
        if (err) {
            res.send('Loi' + err);
        } else {
            getUserByUsername(username).then(user => {
                //first insert place end get id

                const arrfile = req.files;
                arrfile.forEach(e => {
                    insertImage(txtNamePlace, 'upload/' + e.filename, 0, 0, user.rows[0].id, place_id,todaysDate)
                    .then(r=>r);
                });
            });
        }
    })
}