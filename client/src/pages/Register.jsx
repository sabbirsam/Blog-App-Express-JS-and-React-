import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

function Register() {
  /**
   * Register func
   */
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  // now set the Inputs to setInputs 
  const handleChange = e =>{
    setInputs( prev=>({...prev, [e.target.name]: e.target.value}) )
  }
  console.log(inputs);
  const handleSubmit= async e =>{
    e.preventDefault()
    try{
      const res = await axios.post("/auth/register", inputs) // add package.json proxy for the backend and set input here
      console.log(res);
    }
    catch(err){
      console.log(err);
    }

  }
  // end 
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" name="username" id="" placeholder='User Name' onChange={handleChange} />
        <input required type="email" name="email" id="" placeholder='User Email' onChange={handleChange} />
        <input required type="password" name="password" id="" placeholder='Password' onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        <p>There is an error!</p>
        <span>Do have you an account? <Link to='/Login'>Login</Link> </span>
      </form>
     
    </div>
  )
}

export default Register
