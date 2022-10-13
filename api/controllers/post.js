import {db} from "../db.js"

export const getPosts = (req, res)=>{
   // this one call on the routes of posts.js
   const q = req.query.cat ? "SELECT * FROM posts WHERE cat= ?" : "SELECT * FROM posts" //search bar If search by cat then search on cat wise else search on all posts
   db.query(q, [req.query.cat], (err, data)=>{
    if (err) return res.send(err);
    return res.status(200).json(data);
    // Now go to home.jsx

   })

}

export const getPost = (req, res)=>{
    const q ="SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });

}


export const addPost = (req, res)=>{
    res.json("This is from post controllers") 
}


export const deletePost = (req, res)=>{
    res.json("This is from post controllers") 
}


export const updatePost = (req, res)=>{
    res.json("This is from post controllers") 
}

