import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {BsFillCartCheckFill} from "react-icons/bs";
import { NavDropdown } from 'react-bootstrap';
const Navbar = ({setShow,size}) => {
  let user = JSON.parse(localStorage.getItem("user-info"))
  const history = useNavigate();
  function logout(){
    localStorage.clear();
    history("/signup")

  }
  return (
  
    <div  style={{backgroundColor:"orangered",height:"70px",color:"black"}}>
      <div style={{display:"flex"}}>
      <Link to="/" style={{flex:"1",listStyleType:"none",marginLeft:"20px",fontSize:"25px",color:"black",fontWeight:"bold",marginTop:"10px",cursor:"pointer",textDecoration:"none"}}>Shophub</Link>
      <Link to="/" style={{flex:"1",listStyleType:"none",marginLeft:"200px",fontSize:"25px",color:"black",fontWeight:"bold",marginTop:"10px",cursor:"pointer",textDecoration:"none"}}>Home</Link>
     
        <Link to="/login" style={{flex:"1",listStyleType:"none",marginLeft:"170px",fontSize:"25px",color:"black",fontWeight:"bold",marginTop:"10px",cursor:"pointer",textDecoration:"none"}}>Login</Link>
        <Link to="/signup" style={{flex:"1",listStyleType:"none",marginLeft:"150px",fontSize:"25px",color:"black",fontWeight:"bold",marginTop:"10px",cursor:"pointer",textDecoration:"none"}}>Signup</Link>
    <div onClick={()=>setShow(false)}>
      <Link to="/cart"><BsFillCartCheckFill style={{listStyleType:"none",marginLeft:"30px",fontSize:"25px",color:"black",fontWeight:"bold",marginTop:"20px"}}></BsFillCartCheckFill></Link>
      </div>
    <span style={{marginTop:"20px",marginRight:"20px"}}>{size}</span>
    <nav>

    </nav>
    <nav>
      <NavDropdown title={user&&user.name} style={{listStyleType:"none",marginLeft:"30px",fontSize:"25px",color:"black",fontWeight:"bold",marginTop:"0px"}} >
        <NavDropdown.Item onClick={logout}style={{listStyleType:"none",marginLeft:"30px",fontSize:"25px",color:"black",fontWeight:"bold",marginTop:"20px"}}>Logout</NavDropdown.Item>
      </NavDropdown>
    </nav>
    </div>
    </div>
  )
}

export default Navbar
