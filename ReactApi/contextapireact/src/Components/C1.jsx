import React from 'react'
import C2 from './C2'
const C1 = ({obj}) => {
  return (
    <div>
      <h1>C1</h1>
      <C2 obj={obj}/>
    </div>
  )
}

export default C1