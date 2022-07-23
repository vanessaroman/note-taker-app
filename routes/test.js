const router = require('express').Router();

router.get("jingle", (req, res)=> {
    res.json("jangle")
})

module.exports = router