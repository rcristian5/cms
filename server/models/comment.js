import mongoose from 'mongoose'
const Schema = mongoose.Schema


const commentSchema = Schema({
	title: String,
	body:   String,
	creatAt: { type: Date, default: Date.now },
	postsId: { type: Schema.ObjectId, ref: 'posts' }
})


export const COMMENT = mongoose.model ('comments', commentSchema )
