const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3500;
// const db = require('./db');
const mongoDb = require('./db/mongo.js');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('./client/dist'));


// app.get('/', (req, res) => res.send('Hello World!'))
//mongodb

app.get('/api/cows', (req, res) => {
    mongoDb.retrieve()
        .then((allCows) => {
            res.status(200).json(allCows);
        })
        .catch((err) => {
            console.log('axios server err for getting cows', err);
            res.status(404).json(`couldn't find cows`);
        })
});

app.post('/api/cows', (req, res) => {
    console.log('req.body', req.body);
    let newCow = req.body;
    mongoDb.save(newCow)
        .then((result) => {
            console.log('result', result);
            res.status(201).json(result);
        })
        .catch((err) => {
            console.log('axios server err for posting newCow', err);
            res.status(500).json('Failed to save new Cow');
        })
})

app.put('/api/cows', (req, res) => {
    let _id = req.query.id;
    let newName = req.query.name;
    console.log('query', req.query);
    // console.log("id", _id, 'name', newName);
    mongoDb.update(_id, newName)
        .then((updatedCow) => {
            console.log('newCow from put', updatedCow);
            res.status(201).json(updatedCow);
        })
        .catch((err) => {
            console.log('axios server err for putting updatedCow', err);
            res.status(500).json('Failed to update your cow');
        })
});

// app.delete('api/cows/:name', (req, res) => {
//     console.log('req', req);
//     let name = req.params.name;
//     mongoDb.deleteCow(name)
//         .then(() => {
//             res.json('cow has been delted');
//         })
//         .catch((err) => {
//             console.log('deleting err', err);
//             res.json(`Your cows doesn't want to be removed`);
//         })
// })
app.delete('/api/cows', (req, res) => {
    console.log('req', req);
    let id = req.query.id;
    mongoDb.deleteCow(id)
        .then(() => {
            res.json('cow has been delted');
        })
        .catch((err) => {
            console.log('deleting err', err);
            res.json(`Your cows doesn't want to be removed`);
        })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))













/* mysql db:
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
*/