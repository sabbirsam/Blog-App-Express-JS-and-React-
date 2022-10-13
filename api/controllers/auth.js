import {db} from "../db.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

/**
 * 
 * @param {Register} req 
 * @param {*} res 
 */
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
};


/**
 * Login
 */
export const login = (req, res)=>{
   const q = "SELECT * FROM users WHERE username = ? ";
   db.query(q,  [req.body.username], (err,data)=>{
    if(err) return res.json(err);
    if(data.length === 0) return res.status(404).json("User not found");

    // Check the password 
    const isPasswordCorrect = bcrypt.compareSync(
        req.body.password, 
        data[0].password
    );
    if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!");

    // If all ok then 
    // create json web token 
    const token = Jwt.sign({ id:data[0].id }, "jwtkey");
    const { password, ...other } = data[0]
    res.cookie("access_token", token,{
        httpOnly:true
    }).status(200).json(other)
   })
};


/**
 * 
 * @param {Logout} req 
 * @param {*} res 
 */
 export const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("User has been logged out.")
  };