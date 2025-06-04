import { useState } from 'react'
import './hooks.css'
export const CounterState = () =>{
    const [count,setCount] = useState(0)
    const handleCounterValue = () =>{
        setCount(()=>count+1);
    }
    return(
        <div className="container">
            <h1>UseState hooks!!</h1>
            <p>Count: {count}</p>
            <button className="counter_button" onClick={handleCounterValue}>
                Increment
            </button>
        </div>
    )
}