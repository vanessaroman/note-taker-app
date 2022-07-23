const router = require('express').Router();
const database = require('../db/db.json');
database[0].title = "Boats boats boats"
console.log("connected")

router.get('/notes', (req, res) => {
    
    res.json(database)
});

router.post("/notes", (req, res) => {
    // console.log(req.body)
    // console.log(database)

    res.json(database.push(req.body));
    
    res.status(200)
});


module.exports = router
