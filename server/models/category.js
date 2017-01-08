import mongoose from 'mongoose'
const Schema = mongoose.Schema


const categorySchema = Schema({
	name: String,
	commentId: { type: Schema.ObjectId, ref: 'comments' }
})


export const CATEGORY = mongoose.model( 'categories', categorySchema )
