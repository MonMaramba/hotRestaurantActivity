
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();


var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var reserved = [];
var waitingList = [];

/*function reservation(name, phoneNumber, email, id) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.id = id;
}

reserved.push(newreservation);*/

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "/tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "/reserve.html"));
});




app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

