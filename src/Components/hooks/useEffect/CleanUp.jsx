import { useEffect, useState } from "react";
import "../../../style/cleanUp.css";
export const CleanUp = () =>{
    const[count,setCount] = useState(0);
    useEffect(()=>{
       const timer =  setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)

        return () => clearInterval(timer);
    },[])
    return( 
        <div className="CleanUp_container">
            <div className="sub_counter">
                <p>My subscriber on my youtube.</p>
                <div className="count">{count}</div>
                <h3>Subscriber <br /> Realtime counter </h3>
            </div>
        </div>
    )
}