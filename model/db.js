const pg = require('pg');

const config = {
  user: 'postgres', //env var: PGUSER
 database: 'DIPHUOT', //env var: PGDATABASE
 password: '123456', //env var: PGPASSWORD
 host: 'localhost', // Server hosting the postgres database
 port: 5432, //env var: PGPORT
 max: 10, // max number of clients in the pool
 idleTimeoutMillis: 1000 // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);

const queryDB = (sql, arrayData) => (
    new Promise((resolve, reject) =>{
         pool.connect((err,client,done)=>{
             if(err) reject(err +'');
             client.query(sql,arrayData, (errQuery, result)=>{
                 done(errQuery);
                 if(errQuery) return reject(errQuery);
                 return resolve(result);
             })
         })
    })
)

// queryDB('select * from "User"',[])
// .then(res=> console.log(res.rows));
module.exports = queryDB;
