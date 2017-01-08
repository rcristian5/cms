import express from 'express'
import * as postsCtrl from '../controllers/posts'
export let postsRouter = express.Router()


postsRouter.get( '/', postsCtrl.getPosts)


postsRouter.get( '/:id', postsCtrl.getOnlyPosts)


postsRouter.post( '/', postsCtrl.savePosts)


postsRouter.put( '/', postsCtrl.updatePosts)


postsRouter.delete( '/', postsCtrl.deletePosts)
