
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Login(){
  const navigate=useNavigate();
   const handleClick=()=>{
    navigate("/")
   }
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value=="abc@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
        }
    }
   
    return(
      <div style={{backgroundColor:"orange",width:"100%",height:"100vh"}}>
        <center>
      <div style={{marginTop:"0px",border:"solid 2px blue",width:"300px",height:"250px",backgroundColor:"white",borderRadius:"20px"}}>
        <div>
            {
                getEmail&&getPassword?
                <Navbar/>:
            <form onSubmit={handleSubmit}>
             
                <div>
                    <label  style={{marginTop:"40px"}}>Email</label><br/>
                    <input type="text" ref={email} />
                </div>
                <div>
                    <label>Password</label><br/>
                    <input type="password" ref={password} />
                </div><br/>
                <button onClick={handleClick} style={{backgroundColor:"blue",color:"white"}}>Login</button>
            </form>
            }
        </div>
        </div>
        </center>
        </div>
    );
}
export default Login;
