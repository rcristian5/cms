
import express from 'express'
import bodyParser from 'body-parser'
const passport = require('passport')

import { postsRouter } from '../routes/posts'
import { errorHandler } from './error'
const userRouter = require('../routes/user')
const passportModule = require('./passport')(passport)


const app = express()


app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )
app.use( passport.initialize() )

app.use( '/api/user', userRouter.public )

app.use( passportModule.authenticateLocal )

app.use( '/api/user', userRouter.private )
app.use( '/api/posts', postsRouter )


app.use( errorHandler )


export const listenApp = ( _port ) => {
	return () => {
		app.listen( _port, () => {
			console.log(`Server listening in http://localhost:${_port}`)
		})
	}
}
