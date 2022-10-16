import React, { useEffect, useState } from 'react'
import Menu from "../components/Menu";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import axios from 'axios';
import moment from "moment";
import { useContext } from 'react';
import {AuthContext} from "../context/authContext"
import DOMPurify from "dompurify";

function Single() {
  const [post, setPost] = useState({}) //take empty array on the usestate
  // const location = useLocation();
  const location = useLocation() //here we need ID so use split 
  const navigate =useNavigate()
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

  // Delete Functionality

  const handleDelete= async ()=>{
    try{
       await axios.delete(`/posts/${postId}`); //fix here
       navigate("/")

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='single'>
      <div className="content">
      <img src={`../upload/${post.img}`} alt="" />
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
             <Link to={`/write?edit=2`} state={post}>
             <img src={Edit} alt="" />
             </Link>
             <img onClick={handleDelete} src={Delete} alt="" />
            {/* </div> */}
            </div>}
            
          </div>
          <h1>{post.title}</h1>
          
          <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>   

      </div>
      <Menu cat={post.cat}/> 
      {/* prop pass here to side menu  */}
    </div>
  )
}

export default Single
