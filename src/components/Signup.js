import React, { isValidElement, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Signup() {

  const [password, setPassword] = useState(''); 
  const [email, setEmail] = useState(''); 
  
  function setPass(val)
  {
    setPassword(val.target.value);
  }

  function setMail(val)
  {
    setEmail(val.target.value);
    
  }

  function validation()
 {
  let obj=
  {
    isValidEmail:false,
    isValidPassword:false
  };
     obj.isValidPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,9})/.test(password);
     obj.isValidEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email);
     return obj;
 }

function onSubmit()
{
  var validation_obj=validation();
  if(!validation_obj.isValidEmail)
  {
    
    alert("Please enter a valid email address.")
  }
  if(!validation_obj.isValidPassword)
  {
    alert("Password should have minimum 8 characters, consisting of at least one digit, one lower case, one upper case and one special character")
  }

  
}
  return (
             
    <div className="main">
    <div className="sub-main">
      
     <div>
       <h1>Sign-up</h1>
       <div>
    <input type="text" placeholder="Full Name" className="name"/>
    </div>
    <div>
      <input type="text" placeholder="Email" className="mail" onChange={setMail}/>
    </div>
    <div>
    <input type="text" placeholder="User Name" className="Uname"/>
    </div>
    <div>
    <input type="password" placeholder="Password" className="pass" onChange={setPass}/>
    
    </div>
    <div>
      <button className="button" onClick={onSubmit}>Create Account</button>
    </div>
      <div className="link">
        

      

        </div>
       </div>
    </div>
  </div>
 
  )
}
