const mongoose = require('mongoose')
const schema = mongoose.schema


const commentSchema = ({
	author: String,
	body:   String,
	date: { type: Date, default: Date.now },
	posts: { type: Schema.ObjectId, ref:"posts" }
})



module.exports = mongoose.model ('comment', commentSchema)
