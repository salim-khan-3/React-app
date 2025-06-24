import { useId, useRef } from "react";
import { UseRef } from "./useRaf"

export const ForwardRefs = () =>{

    const username = useRef(null);
    const password = useRef(null);

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(`username: ${username.current.value}`);
        console.log(`password: ${password.current.value}`);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <BeforeReact19Input label="username" ref={username}/>
            <BeforeReact19Input label="password" ref={password}/>
            <button>submit</button>
        </form>
    )
}


// before version 19 
// const BeforeReact19Input =forwardRef((Props,ref)=>{
//     const id = useId();
//     return(
//         <div>
//             <label htmlFor={id}>{Props.label}</label>
//             <input type="text" ref={ref}/>
//         </div>
//     )
// })

// after version 19
const BeforeReact19Input =(Props)=>{
    const id = useId();
    return(
        <div>
            <label htmlFor={id}>{Props.label}</label>
            <input type="text" ref={Props.ref}/>
        </div>
    )
}


