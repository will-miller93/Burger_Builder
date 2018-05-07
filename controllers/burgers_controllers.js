var express = require("express");

var router = express.Router();

// require in the files you will need for this controller.
var burger = require("../models/burger.js");

// create all routes and set up logic within those routes where required.
// ex. router.get, router.post, router.put, router.delete.

// one to get all of the information from the database.
// router.get
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handleObj = {
            burgers: data
        }
        console.log(handleObj);
        res.render("index", handleObj);
    })
})
// one to post a newly created burger to the database
// router.post
router.post("/api/burgers", function(req, res) {
    burger.insertOne( ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(data) {
        res.json(data);
    })
})
// one to update if the burger has been devoured or not. 
// router.put
router.put("/api/burgers/:id", function(req, res) {
    var devoured = "id = " + req.params.id;
    burger.updateOne({ devoured: req.params.devoured }, devoured, function(data) {
        if (err) throw err;
    })
})
// export the router for access by server.js
module.exports = router;
