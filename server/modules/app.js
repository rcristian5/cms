
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

const postsRouter = require('../routes/posts')
const userRouter = require('../routes/user')
const errorModule = require('./error')
const passportModule = require('./passport')(passport)

const app = express()


app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )
app.use( passport.initialize() )

app.use( '/api/user', userRouter.public )

app.use( passportModule.authenticateLocal )

app.use( '/api/user', userRouter.private )
app.use( '/api/posts', postsRouter )


app.use( errorModule.errorHandler )


app.listenApp = ( _port ) => {
	return () => {
		app.listen( _port, () => {
			console.log(`Server listening in http://localhost:${_port}`)
		})
	}
}


module.exports = app
