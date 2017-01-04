
const express = require('express')
const bodyParser = require('body-parser')

const postsRouter = require('../routes/posts')
const errorModule = require('./error')


const app = express()


app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )


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
