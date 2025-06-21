import { use, useRef } from "react"

export const UseRef = () =>{

    // const username = document.getElementById("username")
    // const password = document.getElementById("password")
    // const handleFormSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log(username.value);
    //     console.log(password.value); 
    // }


    const username = useRef(null)
    const password = useRef(null)

    const handleFormSubmit = (e) =>{
     e.preventDefault();
     console.log(username.current.value);
     console.log(password.current.value); 
    }

    
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={username}/>
            <input type="password" id="password" ref={password} />
            <button>Submit</button>
        </form>
    )
}