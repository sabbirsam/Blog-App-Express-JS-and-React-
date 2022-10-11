import  express from "express";
import authRoutes from "./routes/auth.js" 
import userRoutes from "./routes/users.js" 
import postRoutes from "./routes/posts.js" //set any name
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json())
app.use(cookieParser())

//Posts routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes) //this one belongs to routes posts.js 

// routes are sepetated on routes folder and by import its uses 
// app.get("/test", (req,res)=>{
//     res.json("Its Working");
// })



app.listen(8800,()=>{
    console.log("connected");
})