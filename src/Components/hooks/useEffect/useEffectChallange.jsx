import { use, useEffect, useState } from "react";
import "../../../style/useEffectChallenge.css";
export const UseEffectChallenge = () =>{
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")

    useEffect(()=>{
        document.title = `count: ${count}`;
    },[count])

    useEffect(()=>{
        console.log(name);
    },[name])
    return (
        <div className="useEffect_challenge">
            <h1 style={{fontSize:"2rem"}}>useEffect Challenge</h1>
            <p style={{fontSize:"2rem"}}>
                count: <span>{count}</span>
            </p>

            <button className="btn" onClick={()=>setCount(count+1)}>Increment</button>

            <p>
                Name: <span>{name}</span>
            </p>

            <input type="text" value={name} autoComplete="off" onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}