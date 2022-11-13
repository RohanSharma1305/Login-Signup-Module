import React from 'react'
import { Link, Router } from 'react-router-dom'
export default function Login() {
  return (
    <div className="main">
      <div className="sub-main">
      
       <div>
         <h1>Login</h1>
         <div>
      <input type="text" placeholder="Username" className="name"/>
      </div>
      <div>
      <input type="password" placeholder="Password" className="pass"/>
      </div>
      <div>
        <button className="button">Login</button>
      </div>
        <div className="link">
        <p>New User?<Link to="/signup">Register Here</Link></p>
          </div>
        
         </div>
  
      </div>
    </div>
  )
}
