import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Login.css"

function Login() {
  return (
    <div className="login-body">
        <div className="login-container">
            <form action="POST">
                <div className="email">
                    <label htmlFor="email">Email :</label>
                    <input name='email' type="email" />
                </div>
                <div className="password">
                    <label htmlFor="password">password :</label>
                    <input name='password' type="password" />
                </div>
                <button type='submit'>login</button>
            </form>
            <p>If don't have account then <span><Link to="/signup">create account</Link></span></p>
        </div>
    </div>
  )
}

export default Login
