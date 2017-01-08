
import mongoose from 'mongoose'
import { databaseConfig } from './config'
const db = mongoose.connection


export const databaseConnect = ( _cbSuccess, _cbError ) => {
	mongoose.connect(`${databaseConfig.uri}/${databaseConfig.name}`)
	setListeningConnection( _cbSuccess, _cbError )
}


const setListeningConnection = ( _cbSuccess, _cbError ) => {
	db.on( 'error', _cbError || errorConnection )
	db.once('open', _cbSuccess  || successConnection )
}


const successConnection = () => {
	console.log('Conectado a la base de datos');
}


const errorConnection = ( err ) => {
	console.error( err )
}
