import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Login() {

  const [inputs, setInputs] = useState({
    username:"",
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
      await axios.post("/auth/login", inputs) // add package.json proxy for the backend and set input here
      //if success navigate to login page
      navigate("/")
    }
    catch(err){
      setError(err.response.data)
    }
  };
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input required type="text" name="username" id="" placeholder='User Name' onChange={handleChange} />
        <input required type="password" name="password" id="" placeholder='Password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err &&<p>{err}</p>}
        <span>Don't you have an account? <Link to='/Register'>Register</Link> </span>
      </form>
     
    </div>
  )
}

export default Login
