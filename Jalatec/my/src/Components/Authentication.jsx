
import { useState, useEffect } from "react";
import {Link}from "react-router-dom";
import "./Authentication.css";

function App() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <center>
    <div className='head'>
      <h1 className='h1'>JALA Academy</h1>
      <h2 className='h2'>Login Credentials</h2>
       <h5 className='h5'>Email:training@jalaacademy.com</h5>
      <h5>Password : jobprogram</h5>
       <h4 className='h4'>Learn Everything on Real-Time Scenarios</h4>
  
    <div className="container">
      <form className="card3" onSubmit={handleSubmit}>
        <div className="ui divider"></div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <input className='input3' type="checkbox"/>
            <Link className='d-grid gap-2' to = "/create">
           <button className='btn1'>Sign in</button>
           </Link>
             <h5 className='or'>-OR</h5>
            <button className='btn2'>Forgot Password</button>
            <h5 className='admin'>Admin Login</h5>
          </form>
        <h4 className='foot'>JALA Academy offers Job Guaranteed Programs for Freshers to 12 years’ experience on Full Stack Development / Automation Testing / Dev-Ops / QA/ SDET/Cyber Security / RPA / Cloud Technologies. Training would be completely on live Project scenarios Read our website JALA Academy for more details : https://jalaacademy.com/</h4>
        </div>
      </div>
      </center>
  );
}

export default App;