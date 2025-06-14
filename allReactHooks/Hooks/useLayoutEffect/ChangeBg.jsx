import React, { useLayoutEffect, useState } from 'react'


const ChangeBg = () => {
    const [color,setColor] = useState('lightblue')
    useLayoutEffect(() => {
   document.body.style.backgroundColor=color; }, [color])//[] dependency array
  return (
    <div>
        <h2>Current background color: {color}</h2>
        <button onClick={()=>setColor("red")}>red</button>
        <button onClick={()=>setColor("green")}>green</button>
        <button onClick={()=>setColor("black")}>black</button>
        <button onClick={()=>setColor("pink")}>pink</button>
      
    </div>
  )
}

export default ChangeBg
