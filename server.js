// dependencies
var express = require("express");
var bodyParser = require("body-parser");

// set PORT
var port = process.env.PORT || 3000;

// new express instance
var app = express();

// access the static page.
app.use(express.static("public"));

// set up body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up handlebars
var exphbs = require("express-handlebars");

// start and set engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and allow access to the server
var routes = require("./controllers/burgers_controllers");

app.use(routes);

app.listen(port, function() {
  console.log("App now listening at localhost:" + PORT);
});