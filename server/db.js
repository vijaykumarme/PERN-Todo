const Pool = require("pg").Pool

const pool = new Pool({
    user: 'postgres',       //user
    host: '', //host ip address
    database: '',   //database
    password: '', // Password
    port: 5432, // Default PostgreSQL port
  });

module.exports = pool;


