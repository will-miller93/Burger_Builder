// require mysql in this page to be able to make the connection.
var mysql = require("mysql");

// enter my credentials
var connection = createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

// make the connection
connection.connect(function(err) {
    if (err) {
        console.log("error connecting : " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadID);
});

// export the connection for use in other files.
module.exports = connection;