import { useState } from "react"
import "./shortCircuit.css"
export const ShortCircuitExample = () =>{
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const [user,setUser] = useState("");
    return(
        <section className="container">
            <h1>Welcome to the ShortCircuit Evalution!</h1>

            {
               isLoggedIn && <p>You are logged in!!</p>
            }
            {
                user? `Hello ${user}`: "Plz log in!"
            }

            <div className="display_flex">
                <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button onClick={()=>setUser("hello Md salim islam")}>set user</button>
                <button onClick={()=>setUser("")}>clear user</button>
            </div>
        </section>
    )
}