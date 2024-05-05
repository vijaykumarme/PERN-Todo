const {Pool} = require("pg");

const pool = new Pool();
module.exports = {
  query: (text,params) => pool.query(text,params)
}

// const pool = new Pool({
//     user: 'postgres',       //user
//     host: '', //host ip address
//     database: '',   //database
//     password: '', // Password
//     port: 5432, // Default PostgreSQL port
//   });

// module.exports = pool;


