var express = require("express");
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function(req, res) {
    // attempt to connect to database
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            // there was an error connecting to database
            console.log('Error connecting to database', errorConnectingToDatabase)
            res.sendStatus(500);
        } else {
            // we connected to the database!!!
            // now we're going to GET things from the DB
            client.query('SELECT * FROM shoes;', function(errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    // query failed. Did you test it in Postico?
                    // log the error
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

router.post('/', function(req, res) {
    // attempt to connect to database
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            // there was an error connecting to database
            console.log('Error connecting to database', errorConnectingToDatabase)
            res.sendStatus(500);
        } else {
            // we connected to the database!!!
            // now we're going to GET things from the DB
            client.query(`INSERT INTO shoes (name, cost)
                VALUES ($1, $2);`, [req.body.name, req.body.cost], function(errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    // query failed. Did you test it in Postico?
                    // log the error
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
        }
    });
});

module.exports = router;