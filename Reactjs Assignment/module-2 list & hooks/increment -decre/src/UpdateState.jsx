import { useState } from "react"

const UpdateState = () => {

    const [num,setNum] = useState(0);
    
  //   function IncNum() {
  //     SetNum(num+1);
  // }
  // function DecNum() {
  //   SetNum(num-1);
  // }
  // function ResetNum() {
  //   SetNum(0);
  // }
  return (
    <div> 
        <h1>Update State</h1>

        <button onClick={()=>setNum(num +1)}>Increase</button>
        <h1>{num}</h1>
        {/* <button onClick={decrement}>Decrese</button> */}
        {/* <button className="btn" type="button" onClick={DecNum}>Decrement</button>
        <button className="btn" type="button" onClick={IncNum}>Increment</button> <br/>
        <button className="btn" type="button" onClick={ResetNum}>Reset</button> */}

        <button onClick={()=>setNum(num -1)}>Decrease</button>
        <button onClick={()=>setNum(0)}>Reset</button>
    </div>
  )
}

export default UpdateState