const queryDB  = require('./db');

const checkLogin = (u,p) =>{
    sql = `SELECT username, password 
        FROM public."User" 
        WHERE username=$1 AND "password"=$2`;
      return queryDB(sql,[u,p],[])
}

module.exports = checkLogin;
//checkLogin('kien','kien').then(res=>console.log(res.rows));

