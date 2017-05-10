const queryDB = require('./db');

const getListPlace = () => (
    queryDB(`select * from "place"`, [])
);

const getPlaceFromId = (id) => (
    queryDB(`select * from "place" where id = $1`, [id])
);

const getListPlaceFromUser = (id) => (
    queryDB(`select * from "place" where user_id = $1`, [id])
);

const addPlace = (txtNamePlace, cbTreckking, camping, seeView, cbClaimb,
    txtAddress, cityId, provinceId, txtDesPlace, arrFile, userId) => {
    return new Promise((resolve, reject) => {
        if (cbTreckking === 'undefined') cbTreckking = '';
        if (camping === 'undefined') camping = '';
        if (seeView === 'undefined') seeView = '';
        if (cbClaimb === 'undefined') cbClaimb = '';
        
        queryDB(`insert into "place" (name,) value  ()`)
    })
}

module.exports = { getListPlace, getPlaceFromId, getListPlaceFromUser };