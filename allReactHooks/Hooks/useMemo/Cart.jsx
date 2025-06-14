import React, { useState,useMemo } from 'react'

const cart = () => {
    const [cart, setCart] = useState([
        {id:1,name:"laptop",price:40000},
        {id:2,name:"phone",price:50000},
        {id:3,name:"Headphones",price:30000},
      


    ])
    const [discount,setDiscount]=useState(0);


    const totalPrice=useMemo(()=>{
        return cart.reduce((total,item)=>total+item.price,0) 
        

    },[cart])
  return (
    <div>
      <h2>welcome to shopping cart</h2>
      {cart.map((item)=><p key={item.id}>{item.name}: {item.price}</p>)}
      <h3>Total Price: {totalPrice}</h3>
      <button onClick={()=>setDiscount(discount+10)}>Increment Discount by 10 </button>
    </div>
  )
}

export default cart
