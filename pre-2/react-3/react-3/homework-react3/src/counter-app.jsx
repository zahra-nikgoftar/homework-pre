import React from "react";
import { useState } from "react"; 
const Counter =()=>{
    const[count,setCount]=useState(0);

    return (
      <>
        <p>{count}</p>
        <button onClick={()=>setCount((count)=> count + 1)}>
          Increase
        </button>
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </>
    );
}

export default Counter;