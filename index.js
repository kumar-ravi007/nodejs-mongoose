const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Book = require("./Book.model");

const port = 8080;

const db = "mongodb://localhost/test";
mongoose.connect(db,{ useNewUrlParser: true });

app.listen(port,function(){
	console.log("Listening on port 8080");
});