import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input required type="text" name="username" id="" placeholder='User Name'/>
        <input required type="password" name="password" id="" placeholder='Password' />
        <button>Login</button>
        <p>There is an error!</p>
        <span>Don't you have an account? <Link to='/Register'>Register</Link> </span>
      </form>
     
    </div>
  )
}

export default Login
