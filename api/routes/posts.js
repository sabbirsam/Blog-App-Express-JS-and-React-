import  express from "express";
import  {addPost, deletePost, getPost, getPosts, updatePost} from "../controllers/post.js";

const router = express();

router.get("/", getPosts )
router.get("/:id", getPost )
router.post("/", addPost )
router.delete("/:id", deletePost )
router.put("/:id", updatePost )
//Now move to controller 


export default router