import React, { useEffect, useState } from 'react'

const FetchData = () => {
      const [counter, setcounter] = useState(0)
      useEffect(()=>{
        console.log("useeffect is running....")
        document.title=counter;

      },[counter])//[] is dependency array. 
  return (
  
    <div>
        <h1>
            Counter={counter}
        </h1>
        <button onClick={()=>{setcounter(counter+1)}}>increase</button>
        <button onClick={()=>{setcounter(counter-1)}}>decrease</button>
      fetchdata

    </div>
  )
}

export default FetchData
