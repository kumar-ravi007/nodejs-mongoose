const mongoose = require("mongoose");
const schema = mongoose.Schema;


const Student = new schema({
	first_name: String,
	last_name: String,
	age: Number,
	role: String,
	class: String,
	dob: Date,
	status:Boolean
});

module.exports = mongoose.model('Student',Student);