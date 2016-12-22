
const configModule = require('./modules/config')
const databaseModule = require('./modules/database')
const appModule = require('./modules/app')


const port = process.env.PORT || configModule.app.port


databaseModule.connect( appModule.listenApp(port) )
