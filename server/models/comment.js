const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentSchema = Schema({
	title: String,
	body:   String,
	creatAt: { type: Date, default: Date.now },
	postsId: { type: Schema.ObjectId, ref: 'posts' }
})


module.exports = mongoose.model ('comments', commentSchema )
