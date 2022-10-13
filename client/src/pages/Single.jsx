import React, { useEffect, useState } from 'react'
import Menu from "../components/Menu";
import {Link, useLocation} from 'react-router-dom'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import axios from 'axios';
import moment from "moment";
import { useContext } from 'react';
import {AuthContext} from "../context/authContext"

function Single() {
  const [post, setPost] = useState({}) //take empty array on the usestate
  // const location = useLocation();
  const location = useLocation() //here we need ID so use split 
  const postId = location.pathname.split("/")[2] //  / use kore split with array 2 index
  // console.log(location) // use search from the location
  //to categories set 
  const {currentUser} = useContext(AuthContext)
  

  // current user 
  // now useEffect 
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        // const res = await axios.get("/posts") //endpoint is post as we're searching in all posts
        const res = await axios.get(`/posts/${postId}`); //fix here
        //If all ok then getpost id by splict the url
        setPost(res.data)

      }catch(err){
        console.log(err)
      }
    };
    fetchData(); //call here the fetch function
  },[postId]) // here cat use while we change cat It call the function again and again

  return (
    <div className='single'>
      <div className="content">
          <img src={post?.img} alt="" />
          <div className="user">
            {post.userImg && <img
            src={post.userImg}
            alt=""/>}
            <div className="info">
              <span>{post?.username}</span>
              {/* <span>username</span> */}
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            
           {currentUser?.username === post.username && <div className="edit">
           {/* <div className="edit"> */}
             <Link to={`/write?edit=2`}>
             <img src={Edit} alt="" />
             </Link>
             <img src={Delete} alt="" />
            {/* </div> */}
            </div>}
            
          </div>
          <h1>{post.title}</h1>
          {post.desc}
      </div>
      <Menu/>
    </div>
  )
}

export default Single
