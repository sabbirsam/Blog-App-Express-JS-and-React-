import React from 'react'
import {Link} from 'react-router-dom'

function Register() {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" name="username" id="" placeholder='User Name'/>
        <input required type="email" name="email" id="" placeholder='User Email'/>
        <input required type="password" name="password" id="" placeholder='Password' />
        <button>Register</button>
        <p>There is an error!</p>
        <span>Do have you an account? <Link to='/Login'>Login</Link> </span>
      </form>
     
    </div>
  )
}

export default Register
