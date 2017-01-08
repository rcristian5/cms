
import express from 'express'
import bodyParser from 'body-parser'

import { postsRouter } from '../routes/posts'
import { errorHandler } from './error'


const app = express()


app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )


app.use( '/api/posts', postsRouter )


app.use( errorHandler )


export const listenApp = ( _port ) => {
	return () => {
		app.listen( _port, () => {
			console.log(`Server listening in http://localhost:${_port}`)
		})
	}
}
