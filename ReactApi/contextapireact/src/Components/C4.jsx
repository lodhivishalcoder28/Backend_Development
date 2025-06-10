import React from 'react'
import dataContext from '../context/DataContext/DataContext'
import { useContext } from 'react'



const C4 = () => {
  const d= useContext(dataContext)
  console.log(d)
  return (
    <div>
        <h1>C4 {" "} {d.obj.name} </h1>
        <h1>{d.counter}</h1>
        <button onClick={()=>{d.setcounter(d.counter+1)}}> Increase Counter by 1</button>

      
    </div>
  )
}

export default C4
