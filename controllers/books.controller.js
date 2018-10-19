const Book = require('../models/Book.model')

module.exports = class Books{

	constructor(){

	}

	getUsers(req,res){
		res.send("User List");
	}

}

// exports.getUser = function(req,res){
// 	res.send("User List");
// }

