import express from "express"
import { addPost } from "../controllers/post.js"

const router = express.Router()

router.get("/test", addPost)

export default router