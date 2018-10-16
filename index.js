const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Book = require("./models/Book.model");
const Student = require("./models/User.model");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extends : true
}));


const port = 8080;

const db = "mongodb://localhost:27017/test";
mongoose.connect(db,{ useNewUrlParser: true });

//insert user
app.post("/user",function(req,res){
	const user = new Student;
	user.first_name = req.body.first_name;
	user.last_name = req.body.last_name;
	user.age = req.body.age;
	user.role = req.body.role;
	user.class =  req.body.class;
	user.dob = new Date(req.body.dob);
	user.status = req.body.status;

	user.save(function(err,user){
		if(err){
			res.send("Something went wrong!");
		}else{
			res.send(user);
		}
	})
});

app.get("/users",function(req,res){
	Student.find({},function(err,users){
		if(err){
			res.send("Something went wrong!");
		}else{
			res.json(users);
		}
	})
})



app.get('/books',function(req,res){
	console.log("getting all books");
	Book.find({}).exec(function(err,books){
		if(err){
			res.send("Something went wrong!");
		}else{
			res.json(books);
		}
	})
});


app.get('/book/:id',function(req,res){
	console.log("getting one book");
	Book.findOne({
		_id: req.params.id
	}).exec(function(err,book){
		if(err){
			res.send("Something went wrong!");
		}else{
			res.json(book);
		}
	})
})



app.post('/book',function(req,res){
	const newBook = new Book;
	newBook.title = req.body.title;
	newBook.author = req.body.author;
	newBook.category = req.body.category;

	newBook.save(function(err,book){
		if(err){
			res.send("Something went wrong");
		}else{
			console.log(book);
			res.send(book);
		}
	})
});


app.listen(port,function(){
	console.log("Listening on port 8080");
});