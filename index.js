const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const BooksController = require('./controllers/books.controller');
const UsersController = require('./controllers/users.controller');

const UserRoutes = require("./routes/user.routes")(router);
const BooksRoutes = require("./routes/book.routes")(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extends : true
}));

app.use(UserRoutes);
app.use(BooksRoutes);



const db = "mongodb://localhost:27017/test";
mongoose.connect(db,{ useNewUrlParser: true });




app.listen(8080,function(){
	console.log("Listening on port 8080");
});