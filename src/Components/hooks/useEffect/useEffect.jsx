import { useEffect, useState } from "react"
import "./style.css";
export const ReactUseEffect = () =>{
    const [date,setDate] = useState(0);

    useEffect(()=>{
        setInterval(() => {
            const updattedTime = new Date();
            setDate(updattedTime.toLocaleTimeString());
        }, 1000);
    },[])


    return(
        <div className="date_time">
            <h1>Date: {date}</h1>
        </div>
    )
}