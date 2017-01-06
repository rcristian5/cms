const express = require('express')
const userCtrl = require('../controllers/user')
let router = express.Router()


router.get( '/', userCtrl.getUser)


router.get( '/:id', userCtrl.getOnlyUser)


router.post( '/', userCtrl.saveUser)


router.put( '/', userCtrl.updateUser)


router.delete( '/', userCtrl.deleteUser)


module.exports = router
