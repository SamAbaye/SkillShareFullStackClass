const { Pool } = require("pg");
let data = new Pool({
    connectionString: process.env.database
    ,ssl: {rejectUnauthorized: false},
})

module.exports = data;  