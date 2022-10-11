import {db} from "../db.js";
import bcrypt from "bcryptjs";


export const register = (req, res)=>{
    // res.json("This is from auth controllers") //

    //Check Existing users If we already have or not
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(q,[req.body.email, req.body.username], (err, data)=>{
        if(err) return res.json(err) // to show error
        if(data.length) return res.status(409).json("User already exists!")

        // No users then create 
        /**
         * Hash to password and create a user
         *
         */
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);

        // add to db 

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
        const values =[
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err, data)=>{
            if(err) return res.json(err) // to show error
            return res.status(200).json("User created..")
        })
    })
}
export const login = (req, res)=>{
   
}
export const logout = (req, res)=>{
   
}