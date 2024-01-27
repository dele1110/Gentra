import React from 'react'


function Register() {
  return (
    <div className='register'>
      <p>School Management System</p>
      <form className='form'>
        <input type="password"  placeholder='Enter your username'/>
        <br /><br />
        <input type="password" required placeholder='Enter your password' />
        <br /><br />
        <button type="reset">Login</button>
        <br /><br />
      </form>
    </div>
  )
}

export default Register
