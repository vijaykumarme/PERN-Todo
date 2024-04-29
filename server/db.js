const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Kumar@369*",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;

// const {Client} = require("pg");

// const client = new Client({
//     user: "postgres",
//     password: "Kumar@369*",
//     host: "localhost",
//     port: 5432,
//     database: "perntodo"
// });

// client.connect();

// client.query(`Select * from todo`,(err,res) => {
//     if(!err) {
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
// })

// client.end

