import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Write = () => {

  const state = useLocation().state

  /**
   * All need use start here below
   */
   const [value, setValue] = useState(state?.desc || "");
   const [title, setTitle] = useState(state?.title || "");
   const [file, setFile] = useState(null);
   const [cat, setCat] = useState(state?.cat || "");
  const navigate = useNavigate()

  /**
   * On submit
   */
  const upload = async()=>{
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  const handleClick =async e=>{
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
       <div className="editorContainer">
       <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
       </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b>DRAFT
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <input style={{display:"none"}} type="file" id='file' onChange={e=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" checked={cat === 'art'} name="cat" id="art" value="art" onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === 'science'} name="cat" id="science" value="science" onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="science">science</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === 'atechnologyrt'} name="cat" id="technology" value="technology" onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="atechnologyrt">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === 'cinema'} name="cat" id="cinema" value="cinema" onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === 'design'} name="cat" id="design" value="design" onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === 'food'} name="cat" id="food" value="food" onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write