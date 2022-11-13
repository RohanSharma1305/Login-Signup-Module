import React from 'react'

export default function Test() {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const first=e.target.fname.value;
        const last=e.target.lname.value;
        console.log("First name : " +first,"\n","Last name : " +last);
    }
  return (
    <div>  
 
<form onSubmit={handleSubmit}>
<div className="main">
    <div className="sub-main">
      

     <div>
       <h1>Sign-up</h1>
       <div>
    <input type="text" placeholder="Full Name" className="name"/>
    </div>
    <div>
      <input type="text" placeholder="Email" className="mail"/>
    </div>
    <div>
    <input type="text" placeholder="User Name" className="name"/>
    </div>
    <div>
    <input type="password" name="Pas" placeholder="Password" className="pass"/>
    
    </div>
    <div>
      <button className="button" onClick={test}>Create Account</button>
    </div>
      <div className="link">
        
      <p>Have Account?<a href="/Signup"> Login Here</a></p>
        </div>
       </div>
    </div>
  </div>
 <button>Submit</button>
</form>
    </div>
  )
}
