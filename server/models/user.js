const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = Schema({
	username:  { type: String, required: true },
	password:  { type: String, required: true },
	email:   String
})


module.exports = mongoose.model ('users', userSchema)
