// require the connection for the ORM from the connection file.
var connection = require("../config/connection.js");

// object for all of our mySql statement functions 
// creating the ORM
function insertQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function translateToSql(obj) {
    var arr = [];

    // loop through the keys and the push the key/value as a string int arr.
    for (var key in obj) {
        var value = ob[key];
        // check to skip hiddin properties.
        if (Object.hasOwnProperty.call(obj, key)) {
            // if string with spaces, add quotations.
            if (typeOf === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, callBack) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },
    insertOne: function(table, col, vals, callBack) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += insertQuestionMarks(vals.length);
        queryString += ");";

        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        })
    },
    updateOne: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += translateToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            callBack();
        });
    }
};

// export the orm object for the model (burger.js)
module.exports = orm;

