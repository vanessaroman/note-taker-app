const router = require('express').Router();
const fs = require('fs');
const database = require('../db/db.json');
const { v4: uuidv4 } = require('uuid')

// This code was possible with the help od Danny Oka's tutorial


router.get('/notes', (req, res) => {
    
    // res.json(database)

    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {

          console.log(err);
          res.status(400).send('There was an error!');

        } else {
        
          res.json(JSON.parse(data));

        }
      })

});

router.post("/notes", (req, res) => {

    // res.json(database.push(req.body));

    console.log(req.body)

    const { title, text } = req.body;

    
    // res.json(database.push(req.body));
    
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        var json = JSON.parse(data);
        
        json.push(req.body)

        fs.writeFile('./db/db.json', JSON.stringify(json), function(err){
            if (err) {

                console.log(err);
              
            } else {

                const dbNotes = JSON.parse(data);

                dbNotes.push({ title, text, id: uuidv4() });

                fs.writeFile(

                  './db/db.json',
                  JSON.stringify(dbNotes), 'utf-8', (error) => {
                    if (error) {
                      console.log(error);
                    }
                  }
                );
              }
            console.log('new note added to database!');
        });

        res.send('New note added!');

    });

    
    res.status(200)
});


module.exports = router
