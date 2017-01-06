const express = require('express')
const userCtrl = require('../controllers/user')
let router = {
	public: express.Router(),
	private: express.Router()
}


router.public.get( '/', userCtrl.getUsers)


router.public.get( '/:id', userCtrl.getOnlyUser)


router.public.post( '/', userCtrl.saveUser)


router.private.put( '/', userCtrl.updateUser)


router.private.delete( '/', userCtrl.deleteUser)


module.exports = router
