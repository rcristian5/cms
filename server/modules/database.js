
const mongoose = require('mongoose')
const config = require('./config')
const db = mongoose.connection
const api = {}



api.connect = ( _cbSuccess, _cbError ) => {
	mongoose.connect(`${config.database.uri}/${config.database.name}`)
	setListeningConnection( _cbSuccess, _cbError )
}



const setListeningConnection = ( _cbSuccess, _cbError ) => {
	db.on( 'error', _cbError || errorConnection )
	db.once('open', _cbSuccess  || successConnection )
}



const successConnection = () => {
	console.log('Conectado a la base de datos');
}



const errorConnection = () => {
	console.error.bind(console, 'connection error:')
}



module.exports = api
