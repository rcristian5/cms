const express = require('express')
const bodyParser = require('body-parser')

const postsRouter = require('./routes/posts')
const databaseModule = require('./modules/database')
const config = require('./modules/config')
const appCtrl = require('./controllers/app')



const app = express()



app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )



app.use( '/', postsRouter )



databaseModule.connect( appCtrl.listenApp(app) )
