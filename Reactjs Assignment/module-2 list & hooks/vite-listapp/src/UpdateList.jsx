import React,{useState} from 'react'

const UpdateList = () => {
    const [num, setNum]= useState (0);
  return (
    <div>
      <h4>Update State</h4>
      <button onClick={()=>{setNum(num+1)}}>Increase</button>
      <h3>{num}</h3>
      <button onClick={()=>{setNum(num-1)}}>Decrease</button>
      <button onClick={()=>{setNum(0)}}>Reset</button>
    </div>
  )
}

export default UpdateList
