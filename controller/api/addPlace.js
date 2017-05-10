const getArrayUpload = require('../../upload.js');
const { verify } = require('../../config/jwt');
const { sign } = require('../../config/jwt');
const cookieParser = require('cookie-parser');

module.exports = (req, res) => {
    const token = req.cookies.tk_lg;
    getArrayUpload("image")(req, res, function (err) {
        if (err) {
            res.send('' + err);
        } else {
            const {txtNamePlace,cbTreckking,camping,seeView,cbClaimb,txtAddress,cityId,provinceId,txtDesPlace} = req.body;
            const arrFile = req.files;
            
        }
    })
}