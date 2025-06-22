import { useId, useRef } from "react";
import { UseRef } from "./useRaf"

export const ForwardRefs = () =>{

    const username = UseRef(null);
    const password = useRef(null);

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(username.current.value);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <BeforeReact19Input label="username" ref={username}/>
            <BeforeReact19Input label="password" ref={password}/>
            <button>submit</button>
        </form>
    )
}

const BeforeReact19Input = ((props,ref)=>{
    const id = useId();
    return(
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={ref}/>
        </div>
    )
})