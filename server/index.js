const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3500;
const db = require('./db');
const bodyParser = require('body-parser');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('./client/dist'));


// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/cows', (req, res) => {
    let queryStr = 'SELECT name, description FROM list';
    db.query(queryStr, (err, data) => {
        if (err) { return res.sendStatus(404); }
        res.status(201).json(data);
    })
});

app.post('/api/cows', (req, res) => {
    console.log('req body', req.body)
    let queryStr = `INSERT INTO list (name, description) VALUES (?, ?);`;
    db.query(queryStr, [req.body.name, req.body.description], (err, data) => {
        if (err) { return res.sendStatus(500); }
        let postedStr = `select name, description from list where list.id = ${data.insertId}`;
        db.query(postedStr, (err, post) => {
            if (err) { return res.sendStatus(500); }
            res.status(201).json(post);
        })
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))