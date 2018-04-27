// require the orm into this file.
// will import the orm to be able to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insertOne: function(callBack) {
        orm.insertOne("burgers", cols, vals, function(res) {
            callBack(res);
        });
    },
    updateOne: function(objColVals, condition, callBack) {
        orm.updateOne("burgers", function(res) {
            callBack(res);
        });
    }
};

// export the database functions for the controller (burgers_controller.js)
module.exports = burger;

// left to do in this file is to decide what to add in for the orm functions. what params do we need to adjust for each one?
// this will be directly connected to the queries performed in the orm.js file.
