const Book = require("../models/Book.model");

module.exports = (router) => {

	router.get('/books',function(req,res){
		console.log("getting all books");
		Book.find({}).exec(function(err,books){
			if(err){
				res.send("Something went wrong!");
			}else{
				res.json(books);
			}
		})
	});


	router.get('/book/:id',function(req,res){
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



	router.post('/book',function(req,res){
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

	return router;
}


