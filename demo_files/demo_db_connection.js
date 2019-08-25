var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "hellp"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});