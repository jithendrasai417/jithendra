 import React, { useEffect, useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Employes from './Empolyee';
import{Link,useNavigate}from "react-router-dom"

const EmployeEdit = () => {
    const [Id,SetId] = useState("")
    const [first_name,SetFirst_name]=useState("");
    const [last_name,SetLast_name]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [gender,setGender]=useState("");
    const [Birthdate,setBirthdate]=useState("");
    const [Country,setCountry]=useState("");
    const [State,setState]=useState("");
  
    var index = Employes.map(function(e){
        return e.id
      }).indexOf(Id);
 
      const history = useNavigate();
      const handleSubmit = (e) => {
          e.preventDefault();

          let a = Employes[index];
          a.first_name = first_name;
          a.last_name = last_name;
          a.phone = phone;
          a.email = email;
          a.gender = gender;
          a.Birthdate = Birthdate;
          a.Country = Country;
          a.State = State;
        history("/search");
        };
        useEffect(()=>{
            SetFirst_name(localStorage.getItem("first_name"))
            SetLast_name(localStorage.getItem("last_name"))
            setPhone(localStorage.getItem("phone"))
            setEmail(localStorage.getItem("email"))
            setGender(localStorage.getItem("gender"))
            setBirthdate(localStorage.getItem("Birthdate"))
            setState(localStorage.getItem("State"))
            setCountry(localStorage.getItem("Country"))
            SetId(localStorage.getItem("Id"))

        },[])

  return (
  <form className='card1'>
    <div>
      <h2 className='titel'>Employee create</h2>
      <h3 className='he'>Employee Details</h3>
      <label htmlFor="firstName" className='first'>First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={first_name}
        className='inp1'
        required onChange={(e)=>SetFirst_name(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="lastName" className='last'>Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={last_name}
        className='inp2'
        required onChange={(e)=>SetLast_name(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="phone" className='phone'>Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={phone}
        className='inp3'
        required onChange={(e)=>setPhone(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="email" className='email'>Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        className='inp4'
        required onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="dateOfBirth" className='date'>Date of Birth:</label>
      <input
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        value={Birthdate}
        className='inp5'
        required onChange={(e)=>setBirthdate(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="gender" className='gender'>Gender:</label>
      <select
        id="gender"
        name="gender"
        value={gender}
        className='inp6'
        required onChange={(e)=>setGender(e.target.value)}
      >
        <option value="">-- Please select --</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div>
      <label className='Adress'>Adress</label>
      <textarea className='ad'>

      </textarea>
    </div>
    <div>
      <label htmlFor="countryAddress" className='country'>Country</label>
      <input
        type="text"
        id="countryAddress"
        name="countryAddress"
        value={Country}
        className='inp7'
        required onChange={(e)=>setCountry(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="state" className='state'>State</label>
      <input
        type="text"
        id="state"
        name="state"
        value={State}
        className='inp8'
        required onChange={(e)=>setState(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="skills" className='skills'>Skills:</label>
      <label className='ch1'>AWS</label>
     <input className='c1' type="checkBox"/>
     <label className='ch2'>DevOps</label>
     <input className='c2' type="checkbox" />
     <label className='ch3'>Full Stack Developer</label>
     <input className='c3' type="checkbox" />
     <label className='ch4'>Middleware</label>
     <input className='c4'  type="checkbox" />
     <label className='ch5'>QA-Automation</label>
     <input className='c5' type='checkbox'/>
     <label className='ch6'>WebServices</label>
     <input  className='c6'type='checkbox' />
    </div>
    <Link to = "/search">
       <button onClick = {(e)=>handleSubmit(e)} className='btn7'>update</button>
      </Link>
  </form>
  )
}

export default EmployeEdit
