const express = require('express')
const postsCtrl = require('../controllers/posts')
let router = express.Router()


router.get( '/', postsCtrl.getPosts)


router.get( '/:id', postsCtrl.getOnlyPosts)


router.post( '/', postsCtrl.savePosts)


router.put( '/', postsCtrl.updatePosts)


router.delete( '/', postsCtrl.deletePosts)


module.exports = router
