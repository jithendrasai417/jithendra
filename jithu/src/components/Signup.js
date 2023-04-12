
 import React, { useRef,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Signup(){
  const navigate=useNavigate();
   const handleClick=()=>{
    navigate("/login")
   }
    const email=useRef()
    const password=useRef()
    const name= useRef()
    const [showHome,setShowHome]=useState(false)
    const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
    useEffect(()=>{
      if(localSignUp){
          setShowHome(true)
      }
      if(localEmail){
          setShow(true)
      }
     })
    const handleSubmit=()=>{
         if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }
   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
   
    return(
      <div style={{backgroundColor:"orange",width:"100%",height:"100vh"}}>
      <center style={{marginTop:"0px"}}>
      <div style={{marginTop:"0px",border:"solid 2px blue",width:"300px",height:"300px",backgroundColor:"white",borderRadius:"20px"}}>
        <div>
            {
               
               showHome?<Navbar/>:
               
            <form onSubmit={handleSubmit}>
              <div>
                <label style={{marginTop:"40px"}}>Name</label><br/>
                <input type="text" ref={name}/>
              </div>
                <div>
                    <label>Email</label><br/>
                    <input type="text" ref={email} />
                </div>
                <div>
                    <label>Password</label><br/>
                    <input type="password" ref={password} />
                </div><br/>
                <button onClick={handleClick} style={{backgroundColor:"blue",color:"white"}}>Signup</button>
            </form>
            }
        </div>
        </div>
        </center>
        </div>
    );
}
export default Signup;

/* import React, { useEffect, useRef, useState } from "react";
import Login from "./Login";
function Signup(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
    return(
        <div>
            {showHome?<Login/>:
            (show?
                <div className="container">
                        <h1>Hello {localName}</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleSignIn}>Sign In</button>
                </div>
                :
                <div className="container">
                        <div className="input_space">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleClick}>Sign Up</button>
                </div>)
            }
        </div>
    );
}
export default Signup; */