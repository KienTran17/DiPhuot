const getArrayUpload = require('../../upload.js');
const { verify } = require('../../config/jwt');
const { sign } = require('../../config/jwt');
const cookieParser = require('cookie-parser');

const todaysDate = new Date();

function convertDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth()+1).toString();
  var dd  = date.getDate().toString();

  var mmChars = mm.split('');
  var ddChars = dd.split('');

  return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
}

module.exports = (req, res) => {
    const token = req.cookies.tk_lg;
    getArrayUpload("inputKE1[]")(req, res, function (err) {
        if (err) {
            res.send('Loi' + err);
        } else {
            const {txtNamePlace,cbTreckking,camping,seeView,cbClaimb,txtAddress,cityId,provinceId,txtDesPlace} = req.body;
            const arrFile = req.files;
            
            res.send('0');
        }
    })
}