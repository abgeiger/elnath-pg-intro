var pg = require('pg');

var config = {
    database: 'shoe_store', // name of database
    host: 'localhost', // where is your database (which computer)
    port: 5432, // port number for database
    max: 10, // how many connections at one time
    idleTimeoutMillies: 30000 // 30 seconds to try to connect to database
};

module.exports = new pg.Pool(config);