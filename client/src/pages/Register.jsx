import React from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
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

  const [err, setError] = useState(null)
  const navigate = useNavigate()

  // now set the Inputs to setInputs 
  const handleChange = e =>{
    setInputs( prev=>({...prev, [e.target.name]: e.target.value}) )
  }
  console.log(inputs);
  const handleSubmit= async e =>{
    e.preventDefault()
    try{
      // const res = await axios.post("/auth/register", inputs) // add package.json proxy for the backend and set input here
      await axios.post("/auth/register", inputs) // add package.json proxy for the backend and set input here
      //if success navigate to login page
      navigate("/login")
    }
    catch(err){
      setError(err.response.data)
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
        {err &&<p>{err}</p>}
        <span>Do have you an account? <Link to='/Login'>Login</Link> </span>
      </form>
     
    </div>
  )
}

export default Register
