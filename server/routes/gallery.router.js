const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
//const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    let id = req.params.id;
    let queryText = `UPDATE "gallery-items" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
    pool.query(queryText, [id]) //corresponds to $1
    .then((result) =>{
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(`Error making query ${queryText}`, err);
        res.sendStatus(500);
    })
}); // END PUT Route

// GET
router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "gallery-items" ORDER BY "id" ASC';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});// end GET

module.exports = router;