let api = {}


api.errorHandler =  (err, req, res, next ) => {

	let [error, status] = buildObjError( err )

	res
		.status( status )
		.json( error )
}


const buildObjError = ( _err ) => {

	let status = _err.status || 500
	let error = {
		name: _err.name || (_err.error ? _err.error.name : null) || 'Error',
		message: _err.message || (_err.error ? _err.error.message : null) || 'An error occurred',
		errors: _err.errors || (_err.error ? _err.error.errors : null) || []
	}


	if( error.name === 'CastError' ){
		status = 404
		error.name = 'Error not found'
		error.message = `Resource '${_err.error.value}' not found`
	}


	if( error.name === 'SyntaxError' ){
		status = 400
		error.name = 'Bad request'
		error.message = `Syntax error`
	}


	return [error, status]
}


module.exports = api
