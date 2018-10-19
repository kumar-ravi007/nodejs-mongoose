const UsersConroller = require("../controllers/users.controller");

module.exports = (router) => {

	//insert user
	router.post("/user",UsersConroller.saveUser);

	//get all users
	router.get("/users",UsersConroller.getUsers);

	//find user by name
	router.post("/find_user",UsersConroller.findUserByName);

	//find user buy name and age
	router.post('/find_user_name_age',UsersConroller.findUserByNameAge);

	//find user by id
	router.post('/findUserById',UsersConroller.findUserById);

	//find user by id and delete it
	router.post("/findByIdAndDelete",UsersConroller.findUserByIdAndDelete);

	//find user by id and update it
	router.post("/findByIdAndUpdate",UsersConroller.findByIdAndUpdate);

	//find single record
	router.post('/findOneUser',UsersConroller.findOneUser);

	return router;
}


