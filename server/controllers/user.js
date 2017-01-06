const USER = require('../models/user')
const api = {}


api.getUsers = ( req, res, next ) => {
	USER.find( {}, ( err, listUser ) => {
		if( err ) return next({})

		res.status( 200 ).json( listUser )
	})
}



api.getOnlyUser = ( req, res, next ) => {
	let query = { _id: req.params.id || '' }

	USER.findOne( query, ( err, user ) => {
		if( err ) return next({ error: err })

		if( !user ) return next({ name: 'CastError', error: {value: req.params.id} })

		res.status( 200 ).json( user )
	})
}



api.saveUser = ( req, res, next ) => {
	let user = req.body

	USER.create( user, ( err, userStoraged ) => {
		if( err ) return next({ status: 422, error: err })

		res.status( 201 ).json( userStoraged )
	})
}



api.updateUser = ( req, res, next ) => {

	if( !req.body.id ) return next({ status: 400, name: 'Bad request', message: 'Could not find id property' })

	let query = { _id: req.body.id }
	let dataUser = req.body


	USER.findOne( query, ( err, user ) => {
		if( err ) return next({ error: err })

		if( !user ) return next({ name: 'CastError', error: {value: req.body.id} })

		user.username = dataUser.username || user.username
		user.password = dataUser.password || user.password
		user.email = dataUser.email || user.email

		user.save( (err, userUpdated ) => {
			if( err ) return next({ error: err })

			res.status( 200 ).json( userUpdated )
		})

	})
}



api.deleteUser = ( req, res, next) => {

	if( !req.body.id ) return next({ status: 400, name: 'Bad request', message: 'Could not find id property' })

	let query = { _id: req.body.id }

	USER.findOneAndRemove( query, ( err, userRemoved ) => {
		if( err ) return next({ error: err })

		if( !userRemoved ) return next({ name: 'CastError', error: {value: req.body.id} })

		res.status( 200 ).json( userRemoved )
	})
}



module.exports = api
