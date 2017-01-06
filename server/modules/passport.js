const LocalStrategy = require('passport-local').Strategy

const USER = require('../models/user')

module.exports = ( _passport ) => {


	let api = {}


	_passport.use(new LocalStrategy(
		(username, password, done) => {
			USER.findOne({ username: username }, function (err, user) {
				if (err) return done(err)

				if (!user) return done(null, false)

				if ( user.password !== password ) {
					return done(null, false )
				}

				// if (!user.validPassword(password)) {
				// 	return done(null, false, { message: 'Incorrect password.' })
				// }

				return done(null, user)
			})
		}
	))


	api.authenticateLocal =  ( req, res, next ) => {
		_passport.authenticate('local', (err, user ) => {
			if (err) return next(err)
			if ( !user ) return next({ status: 401, name: 'Error de autentificacion', message: 'El nombre de usuario o contraceña es incorrecta' })

			req.user = user
			next()
		})(req, res, next)
	}


	return api
}
