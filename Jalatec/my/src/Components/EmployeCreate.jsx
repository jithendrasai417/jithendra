
import { useState } from 'react';
import {Link,useNavigate}from "react-router-dom"
import Empolyee from "./Empolyee";
import "./Employecreate.css";
import { v4 as uuid } from "uuid";

const EmployeCreate = () => {
  let history = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0,8);


    let a = first_name,
        b = last_name,
        c = phone,
        d = email,
        f = gender,
        g = Birthdate,
        h = Country,
        i = State;

        Empolyee.push({id:uniqueId,first_name:a,last_name:b,phone:c,email:d,gender:f,Birthdate:g,Country:h,State:i});
        history("/Search");
  }


    const [first_name,SetFirst_name]=useState("");
    const [last_name,SetLast_name]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [gender,setGender]=useState("");
    const [Birthdate,setBirthdate]=useState("");
    const [Country,setCountry]=useState("");
    const [State,setState]=useState("");

  return (
    <div className='head'>
    <form className='card1'>
      <div>
        <h2 className='titel'>Employee create</h2>
        <h3 className='he'>Employee Details</h3>
        <label htmlFor="firstName" className='first'>First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
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
          className='inp5'
          required onChange={(e)=>setBirthdate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gender" className='gender'>Gender:</label>
        <select
          id="gender"
          name="gender"
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
         <button onClick = {(e)=>handleSubmit(e)} className='btn6'>save</button>
        </Link>
    </form>
    <div className='card2'>
      Copyright © 2023 JALA Technologies. All rights reserved.
    </div>
    </div>
  );
};

export default EmployeCreate;

