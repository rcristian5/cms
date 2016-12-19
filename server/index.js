const express = require('express')
const bodyParser = require('body-parser')

const postsRouter = require('./routes/posts')
const databaseModule = require('./modules/database')
const appCtrl = require('./controllers/app')



const app = express()



app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )



app.use( '/api/posts', postsRouter )



databaseModule.connect( appCtrl.listenApp(app) )
