
import React, { useState,useEffect} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';


let App = () => {
  const [show,setShow]= useState(true)
  const [cart,setCart]=useState([]);

  const handleClick = (curElem)=>{
    if(cart.indexOf(curElem)!== -1) return;
    setCart([...cart,curElem]);
  };

  const handleChange = (curElem,d)=>{
    const ind = cart.indexOf(curElem);
    const arr = cart;
    arr[ind].price +=d;

    if(arr[ind].price===0) arr[ind].price =1
    setCart([...arr])
  };

   /* useEffect(()=>{
    console.log("cart change")
  },[cart]); */
  return (
    <Router>
      <Navbar setShow={setShow} size={cart.length}/>
   {/*    {show ? ( <Home  handleClick={handleClick} />):(<Cart cart= {cart} setCart={setCart} handleChange={handleChange} />)}
      */}
       <Routes>
        <Route exact path="/" element={<Home handleClick={handleClick}/>} />
        <Route exact path="/" element={<Home handleClick={handleClick}/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart cart= {cart} setCart={setCart} handleChange={handleChange}/>} />

        </Routes>
      <br /><br />
      Copyright jithu Lab
    </Router>
  );
};



export default App;