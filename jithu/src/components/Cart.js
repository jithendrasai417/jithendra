import React, { useEffect, useState } from 'react'
import "../style/cart.css";

const Cart = ({cart,setCart,handleChange}) => {
    const [price,setPrice]= useState(0);

const handleRemove = (id)=>{
    const arr = cart.filter((curElem)=>curElem.id !== id);
    setCart(arr);
    handlePrice();
};
const handlePrice = ()=>{
    let ans = 0;
    cart.map((curElem)=>(ans += curElem.price * curElem.price));
    setPrice(ans)
};
useEffect(()=>{
    handlePrice();
})


  return (
    <article style={{backgroundColor:"orange",width:"100%",height:"100vh"}}>
        {cart.map((curElem)=>(
            <div className="cart_box" key={curElem.id}>
                <div className="cart_img">
                    <img src={curElem.image} />
                    <p>{curElem.title}</p>
                </div>
                <div>
                    <button onClick={()=> handleChange(curElem,+1)}>+</button>
                    <button>{curElem.price}</button>
                    <button onClick={()=> handleChange(curElem,-1)}>-</button>
                </div>
                <div>
                    <span>{curElem.price}</span>
                    <button onClick={()=> handleRemove(curElem.id)}>Remove</button>
                </div>
            </div>
        ))}
        <div className="total">
            <span style={{color:"black",fontSize:"20px",fontWeight:"bold"}}>Total price of your cart</span>
            <span style={{color:"black",fontSize:"20px",fontWeight:"bold"}}>Rs - {price}</span>
        </div>
    </article>
      
  )
}

export default Cart
