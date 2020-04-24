const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3500;
const db = require('./db');
const bodyParser = require('body-parser');
const axios = require('axios');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('./client/dist'));


// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/cows', (req, res) => {
    // console.log('req.param', req.params);
    let queryStr = 'SELECT * FROM list';
    db.query(queryStr, (err, data) => {
        if (err) { return res.sendStatus(404); }
        res.status(201).json(data);
    })
});

app.post('/api/cows', (req, res) => {
    console.log('req', req.params);
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

app.put('/api/cows/:id', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let queryStr = "update list set name=? where id=?";
    db.query(queryStr, [name, id], (err, updatedPost) => {
        if (err) { return res.sendStatus(500); }
        res.status(201).json(updatedPost);
    })
})

app.delete('/api/cows/:id', (req, res) => {
    console.log('put req params', req.params);
    let id = req.params.id;
    let queryStr = `delete from list where id=${id}`;
    db.query(queryStr, (err) => {
        if (err) { return res.sendStatus(500); }
        res.status(202).send('delete successfully');//how to do else when it delete successfully?
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))