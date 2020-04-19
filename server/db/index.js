var mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'cowlist'
});
conn.connect((err) => {
    if (err) {
        throw ('error');
    } else {
        console.log('Your database cowlist is connected')
    }
});

module.exports = conn;