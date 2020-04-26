const Promise = require('bluebird');
const mongoose = Promise.promisifyAll(require('mongoose'));
mongoose.connect('mongodb://localhost/cowList', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
db.once('open', () => {
    console.log('cowList database is connected');
})

const mySchema = mongoose.Schema({
    name: { type: String, unique: true },
    description: String
});

const Cow = mongoose.model('Cow', mySchema);

const save = (newCow) => {

    let cow = new Cow({
        name: newCow.name,
        description: newCow.description
    });

    return cow.save();
};

const retrieve = () => {
    return Cow.findAsync();
};

const update = (_id, newName) => {
    return Cow.findOneAndUpdate(
        { "_id": _id },
        { "name": newName },
        { returnNewDocument: true }
    )
};

const deleteCow = (id) => {
    return Cow.findOneAndDelete({ "_id": id });
};

module.exports = { save, retrieve, update, deleteCow };