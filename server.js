//Do not need to require 'path' module because our html is being dynamically generated

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();

var PORT = process.env.PORT || 8080; //storing TCP port in variable so we can bind to it later



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {  //the listen function also takes an optional callback function as a
	//(cont. from above) second argument. This will run once app is ready to receive requests.
  console.log("App listening on PORT " + PORT); //bind application to TCP port
}); //Once our web api server is up and ready it will console.log "App listening on PORT --"


