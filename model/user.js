const queryDB = require('./db');
const bycript = require('bcrypt');

const checkLogin = (u, p) => (
    new Promise((resolve, reject) => {
        sql = `SELECT username,password
                FROM public."user" 
                WHERE username=$1 Or email =$1`;
        queryDB(sql, [u])
            .then(result => {
                bycript.compare(p, result.rows[0].password, (err, res) => {
                    if (err) reject(err);
                    if (!res) reject(err);
                    resolve(res);
                });
            }).catch((r) => reject(r));
    })
)

const getUserByUsername = (username) => (
    queryDB(`SELECT id, first_name, last_name, email, view, "like", avatar, link_facebook, username, facebook_id, google_id
	FROM public."user" where username = $1 or email = $1`, [username])
)

const insertUser = (first_name, last_name, username, email, password) => (
    queryDB(`INSERT INTO public."user"(
	first_name, last_name, username, email, password, avatar)
	VALUES ($1,$2,$3,$4,$5,$6);`, [first_name, last_name, username, email, password, '../asset/img/user.png'])
)

const insertUserFb = (first_name, last_name, email, avatar, link_facebook, facebook_id) => (
    //first_name, last_name, email, view, "like", avatar, link_facebook,
    // album_id, journey_id, place_id, username, password, facebook_id, google_id
    queryDB(`INSERT INTO public."user"(
	first_name, last_name, email, avatar, link_facebook, facebook_id)
	VALUES ($1,$2,$3,$4,$5,$6);`, [first_name, last_name, email, avatar, link_facebook, facebook_id])
)

const checkExistAccount = (email, facebook_id) => (
    //first_name, last_name, email, view, "like", avatar, link_facebook,
    // album_id, journey_id, place_id, username, password, facebook_id, google_id
    queryDB(`SELECT first_name, last_name, email, facebook_id 
	FROM public."user" where email = $1 and facebook_id = $2`, [email, facebook_id])
)

const getUserById = (id) => (
    queryDB(`SELECT id, first_name, last_name, email, view, "like", avatar, link_facebook, username, facebook_id, google_id
	FROM public."user" where id = $1`, [id])
)
//insertUser('thanh', 'xuan', 'thanhxuan', 'thanhxuan@gmail.com', '123456').then(r => console.log(r)).catch(e => console.log(e + ''));
//checkLogin('kientran','kien123').then(res=>console.log(res));
module.exports = { getUserById, checkLogin, getUserByUsername, insertUser, checkExistAccount, insertUserFb };

