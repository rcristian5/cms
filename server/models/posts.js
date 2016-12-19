const mongoose = require('mongoose')
const schema = mongoose.schema



const postsSchema = ({
	title:  String,
	author: String,
	body:   String,
	comments: [{
		body: String,
		date: { type: Date, default: Date.now }
	}],
	date: { type: Date, default: Date.now },
	hidden: Boolean,
	meta: {
		votes: Number,
		tags: [
			name: String
		],
		categories: [
			name: String
		]
	}
})



module.exports = mongoose.model ('posts', postsSchema)
