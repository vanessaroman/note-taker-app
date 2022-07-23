const express = require('express');
// const notes = require('./db/db.json');
const path = require('path');
const PORT = 3001;

const app = express();
const apiRoute = require('./routes/apiroutes')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(__dirname)

app.use("/api", apiRoute)
app.use(express.static('public'));
// app.get('/', (req, res) => {
//     res.send('Hi there!');
// });


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});


app.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`);
});