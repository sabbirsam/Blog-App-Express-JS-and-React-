import  express from "express";
import  {addPost} from "../controllers/post.js";

const router = express();

// routes created here and call on index.js
// router.get("/test", (req,res)=>{
//     // res.json("This is Post"); seperate all the operation from here to controllers folder

// })

router.get("/test",addPost); //this one belongs to controllers post.js

export default router