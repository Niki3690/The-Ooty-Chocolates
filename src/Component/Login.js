import React from 'react'
import "../Style/Login.css"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div>
      <h1 className='text-center mt-5 login'>Login</h1>
      <div className='main'>
        <div className='main1'></div>
      </div>

      <div>
        <div className="row justify-content-center main-login">
          <div className='col-lg-4 col-sm-12 col-md-12 mt-5'>
            <input type='email' placeholder='Email' className='p-2' /><br />
            <input type='password' placeholder='Password' className='p-2 mt-4' />
            <button type='submit' className='p-3 mt-4'>SIGN IN</button>
            <div className='main-aaa text-center mt-4'>
              <Link to="#" >Create Account</Link><br />
              <Link to="#">Return to Store</Link><br />
              <Link to="#" >Forgot your password?</Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Login
