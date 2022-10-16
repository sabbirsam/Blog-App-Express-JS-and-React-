import  express from "express";
import authRoutes from "./routes/auth.js" 
import userRoutes from "./routes/users.js" 
import postRoutes from "./routes/posts.js" //set any name
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(express.json())
app.use(cookieParser())

// use multer to upload the file 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })

const upload = multer({storage})

app.post('/api/upload', upload.single('file'), function(req, res){
    const file=req.file;
    res.status(200).json(file.filename)
})
// now go to Write.jsx 


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