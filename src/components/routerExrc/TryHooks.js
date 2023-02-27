import { useState, useRef } from "react";


export function TryHooks(){
  const [count, setCount] = useState(0);
  const [text, setText] = useState();
  const textRef = useRef();

   const countHandler =(num)=>{
      setCount((count) => count + num);
      setCount((count) => count + num);
      
   }

   console.log(textRef.current.value)




    return(
        <>

        <input type="text" ref={textRef}>
       
        </input>
        <p>{textRef.current.value}</p>
        <button onClick={() => countHandler(+1)}>+</button>
        <span>{count}</span>
        <button onClick={() => countHandler(-1)}>-</button>
        </>
    )
}