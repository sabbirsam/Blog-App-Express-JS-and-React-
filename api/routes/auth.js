import  express from "express";
import { login, logout, register } from "../controllers/auth.js";


const router = express();
// router.get("/register",register);

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)


export default router