const POSTS = require('../models/posts')
const api = {}
let options = {
	_id: 0,
	__v: 0
}



api.getPosts = ( req, res ) => {
	POSTS.find( {}, options, ( err, listPosts) => {
		if( err ){
			return res.status(500).send('Error')
		}
		res.status(200).json(listPosts)
	})
}



api.getOnlyPosts = ( req, res ) => {
	let query = { _id: req.params.id }

	POSTS.findOne( query, options, ( err, posts) => {
		if( err ){
			return res.status(500).send('Error')
		}
		res.status(200).json(posts)
	})
}



api.savePosts = ( req, res ) => {
	let posts = req.body
	delete posts.date

	POSTS.create( posts, ( err, postsStoraged ) => {
		if( err ){
			return res.status(500).send('Error')
		}
		res.status(200).json(postsStoraged)
	})
}



api.updatePosts = ( req, res ) => {

	let query = { _id: req.body.id }
	let posts = req.body
	delete posts.date

	POSTS.findOneAndUpdate( query, posts, ( err, postsUpdate ) => {
		if( err ){
			return res.status(500).send('Error')
		}

		if( !postsUpdate ){
			return res.status(404).send('Recurso no encontrado')
		}

		res.status(200).json(postsUpdate)
	})
}



api.deletePosts = ( req, res ) => {
	let query = { _id: req.body.id }

	POSTS.findOneAndRemove( query, ( err, postsRemoved ) => {
		if( err ){
			return res.status(500).send('Error')
		}

		if( !postsRemoved ){
			return res.status(404).send('Recurso no encontrado')
		}

		res.status(200).json(postsRemoved)
	})
}



module.exports = api
