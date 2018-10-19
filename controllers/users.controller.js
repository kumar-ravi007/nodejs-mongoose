const User = require('../models/User.model');

//Following is function is used to get All users
exports.getUsers = function(req,res){
	User.find({},function(err,users){
		if(err)
			res.send("Something went wrong!");
		else
			res.json(users);
	});
}


exports.saveUser = function(req,res){
	const user = new User;
	user.first_name = req.body.first_name;
	user.last_name = req.body.last_name;
	user.age = req.body.age;
	user.role = req.body.role;
	user.class = req.body.class;
	user.dob = new Date(req.body.dob);
	user.status = req.body.status;
	user.save(function(err,user){
		if(err)
			res.send("Something went wrong!");
		else
			res.send(user);
	});
}

exports.findUserByName = function(req,res){

	User.find({ first_name: new RegExp('\\b' + req.body.first_name + '\\b', 'i')  },function(err,user){
		if(err)
			res.send("Something went wrong!");
		else
			res.send(user);
	})

}

exports.findUserByNameAge = function(req,res){
	//it is using like operator as well with case insensitive records
	User.find({ first_name:{ $regex : new RegExp(req.body.first_name, "i") }, age : { $lte : req.body.age } },'first_name last_name')
		.exec(function(err,user){
		if(err)
			res.send("Something went wrong!");
		else
			res.send(user);
	});		
	
}

exports.findUserById = function(req,res){
	User.findById(req.body.id).exec(function(err,user){
		if(err)
			res.send("Something went wrong!");
		else
			res.send(user);		
	});
}

exports.findUserByIdAndDelete = function(req,res){
	User.findByIdAndDelete(req.body.id).exec(function(err,user){
		if(err)
			res.send("Something went wrong!");
		else{
			User.find({},function(err,users){
				if(err)
					res.send("Something went wrong!");
				else
					res.send(users);			
			})	
			
		}
	});
}

exports.findByIdAndUpdate = function(req,res){
	User.findByIdAndUpdate(req.body.id,{ age: req.body.age }).exec(function(err,user){
		if(err)
			res.send("Something went wrong!");
		else{
			User.find({},function(err,users){
				if(err)
					res.send("Something went wrong!");
				else
					res.send(users);			
			})	
			
		}
	});
}

exports.findOneUser = function(req,res){
	console.log(req.body.first_name);
	User.findOne({ first_name: new RegExp("\\b"+req.body.first_name+"\\b","i"), age:req.body.age }).exec(function(err,user){
		if(err)
			res.send("Something went wrong!");
		else
			res.send(user);
	});
}