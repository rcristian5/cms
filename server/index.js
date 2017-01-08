
import { appConfig } from './modules/config'
import { databaseConnect } from './modules/database'
import { listenApp } from './modules/app'


const port = process.env.PORT || appConfig.port


databaseConnect( listenApp(port) )
