var express = require("express");

var router = express.Router();

// require in the files you will need for this controller.
var burger = require("../models/burger.js");

// create all routes and set up logic within those routes where required.
// ex. router.get, router.post, router.put, router.delete.

// one to get all of the information from the database.
// router.get

// one to post a newly created burger to the database
// router.post

// one to update if the burger has been devoured or not. 
// router.put

// export the router for access by server.js
module.exports = router;
