var express = require("express");

var express = require("express");

var router = express.Router();

// require in the files you will need for this controller.
var burger = require("../models/burger.js");

// create all routes and set up logic within those routes where required.
// ex. router.get, router.post, router.put, router.delete.

// one to get all of the information from the database.
// router.get
router.get("/", function(req, res) {
    burger.all(function(data) {
        var objinst = {
            burgers: data
        }
        console.log(objinst);
        res.render("index", objinst);
    })
})
// one to post a newly created burger to the database
// router.post
router.post("/api/burgers", function(req, res) {
    burger.create( ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(data) {
        res.json(data);
    })
})
// one to update if the burger has been devoured or not. 
// router.put
router.put("/api/burgers/:id", function(req, res) {
    var devoured = "id = " + req.params.id;
    burger.update({ devoured: req.params.devoured }, devoured, function(data) {
        if (err) throw err;
    })
})
// export the router for access by server.js
module.exports = router;
