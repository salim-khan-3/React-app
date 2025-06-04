import { useEffect, useState } from "react"
import "./style.css";
export const Counter = () =>{
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("Count value:",count);
    },[count])
    return(
        <section className="counter_container">
            <h1 style={{fontSize:"4rem"}}>UseEffect Hook </h1>

            <p style={{fontSize:"2rem"}}>count: {count}</p>
            <button style={{padding:"0.5rem 1rem"}} onClick={() => setCount(count + 1)}>Increment</button>
        </section>
    )
}