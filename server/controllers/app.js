const config = require('../modules/config')
const api = {}


api.listenApp = ( _app ) => {
	return () => {
		_app.listen( config.app.port, () => {
			console.log( `Server listening in http://localhost:${config.app.port}`);
		})
	}
}



module.exports = api
