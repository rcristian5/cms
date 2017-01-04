const POSTS = require('../models/posts')
const api = {}


api.getPosts = ( req, res, next ) => {
	POSTS.find( {}, ( err, listPosts ) => {
		if( err ) return next({})

		res.status( 200 ).json( listPosts )
	})
}



api.getOnlyPosts = ( req, res, next ) => {
	let query = { _id: req.params.id || '' }

	POSTS.findOne( query, ( err, posts ) => {
		if( err ) return next({ error: err })

		if( !posts ) return next({ name: 'CastError', error: {value: req.params.id} })

		res.status( 200 ).json( posts )
	})
}



api.savePosts = ( req, res, next ) => {
	let posts = req.body

	POSTS.create( posts, ( err, postsStoraged ) => {
		if( err ) return next({ status: 422, error: err })

		res.status( 201 ).json( postsStoraged )
	})
}



api.updatePosts = ( req, res, next ) => {

	if( !req.body.id ) return next({ status: 400, name: 'Bad request', message: 'Could not find id property' })

	let query = { _id: req.body.id }
	let dataPosts = req.body


	POSTS.findOne( query, ( err, posts ) => {
		if( err ) return next({ error: err })

		if( !posts ) return next({ name: 'CastError', error: {value: req.body.id} })

		posts.title = dataPosts.title || posts.title
		posts.body = dataPosts.body || posts.body
		posts.hidden = dataPosts.hidden || posts.hidden
		posts.images = dataPosts.images || posts.images
		posts.userId = dataPosts.userId || posts.userId
		posts.tagId = dataPosts.tagId || posts.tagId
		posts.categoryId = dataPosts.categoryId || posts.categoryId


		posts.save( (err, postsUpdated ) => {
			if( err ) return next({ error: err })

			res.status( 200 ).json( postsUpdated )
		})

	})
}



api.deletePosts = ( req, res, next) => {

	if( !req.body.id ) return next({ status: 400, name: 'Bad request', message: 'Could not find id property' })

	let query = { _id: req.body.id }

	POSTS.findOneAndRemove( query, ( err, postsRemoved ) => {
		if( err ) return next({ error: err })

		if( !postsRemoved ) return next({ name: 'CastError', error: {value: req.body.id} })

		res.status( 200 ).json( postsRemoved )
	})
}



module.exports = api
