const mongoose = require('mongoose')
const schema = mongoose.schema


const postsSchema = ({
	title:  String,
	author: String,
	body:   String,
	date: { type: Number, default: Date.now },
	hidden: Boolean,
	votes: Number,
	metas: {
		tags: [{
			name: String
		}],
		categories: [{
			name: String
		}]
	}
})


module.exports = mongoose.model ('posts', postsSchema)
