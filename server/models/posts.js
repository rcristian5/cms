const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postsSchema = Schema({
	title:  { type: String, required: [true, 'Uso de title es requerido'] },
	body:   { type: String, required: true },
	hidden: { type: Boolean, default: false },
	images: [ String ],

	userId: { type: Schema.ObjectId, ref: 'Users' },
	tagId: [{ type: Schema.ObjectId, ref: 'Tags' }],
	categoryId: [{ type: Schema.ObjectId, ref: 'Categories' }],
}, {
	timestamps: true
})


module.exports = mongoose.model ('posts', postsSchema)
