const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema = Schema({
	name: String,
	commentId: { type: Schema.ObjectId, ref: 'comments' }
})


module.exports = mongoose.model( 'categories', categorySchema )
