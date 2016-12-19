const express = require('express')
let router = express.Router()



router.get( '/', (req, res) => {
	res.send('Se listan todos los posts')
})




router.get( '/:id', (req, res) => {
	res.send('Se muestra un posts')
})



router.post( '/', (req, res) =>  {
	res.send('Se agrega un posts')
})




router.put( '/', (req, res) =>  {
	res.send('Se actualiza un posts')
})



router.delete( '/', (req, res) =>  {
	res.send('Se elimina un posts')
})



module.exports = router
