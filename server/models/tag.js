const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tagSchema = Schema({
	name: String,
	commentId: { type: Schema.ObjectId, ref: 'comments' }
})


module.exports = mongoose.model( 'tags', tagSchema )
