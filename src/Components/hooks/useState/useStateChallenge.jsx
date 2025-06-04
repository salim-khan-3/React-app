import { useState } from "react"
import "../hook.css"
export const UseStateChallenge = () =>{
    const [count,setCount] = useState(0);
    const [step,setStep] = useState(1)

    const handleIncrement = () =>{
        setCount(count+step);
    }

    const handleDecrement = () =>{
        setCount(count-step)
    }

    const handleReset = () =>{
        setCount(0)
    }
    return(
        <div className="container_hook">
            <h1>useState Challenge</h1>
            <div className="count">
                <p>Count:{count}</p>
                <input type="number" name="number" placeholder="Enter Your Number" value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
            </div>
            <div className="buttons">
                <button className="btn" onClick={handleIncrement} disabled = {count>= 100}>Increment</button>
                <button className="btn" onClick={handleDecrement} disabled = {count <=0 }>Decrement</button>
                <button className="btn" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}