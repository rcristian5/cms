import mongoose from 'mongoose'
const Schema = mongoose.Schema


const tagSchema = Schema({
	name: String,
	commentId: { type: Schema.ObjectId, ref: 'comments' }
})


export const TAG = mongoose.model( 'tags', tagSchema )
