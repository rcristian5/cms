const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema


const userSchema = Schema({
	username:  { type: String, required: true },
	password:  { type: String, required: true },
	email: String,
	token: String
})


userSchema.pre('save', ( next ) => {
	let user = this
	if ( this.isModified('password') || this.isNew ) {
		bcrypt.genSalt( 10, (err, salt) => {
			if (err) return next(err)
			bcrypt.hash( user.password, salt, ( err, hash ) => {
				if (err) return next(err)
				user.password = hash
				next()
			})
		})
	} else {
		return next()
	}
})


userSchema.methods.comparePassword = (passw, cb) => {
	bcrypt.compare( passw, this.password, (err, isMatch ) => {
		if ( err ) return cb( err )
		cb( null, isMatch)
	})
}


module.exports = mongoose.model ('users', userSchema)
