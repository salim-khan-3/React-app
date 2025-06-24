import { useId } from "react"

export const UseId = () =>{
    
    const id = useId();


    return (
        <form>
            <div>
                <label htmlFor={id+"username"}>username</label>
                <input type="text" id={id+"username"} name="name" placeholder="Enter Your Username" />
            </div>

            <div>
                <label htmlFor={id+"password"}>Password</label>
                <input type="password" id={id+"password"} name="password" placeholder="Enter Your Password" />
            </div>

            <div>
                <label htmlFor={id+"email"}>Email</label>
                <input type="email" name="email" id={id+"email"} placeholder="Enter Your Email" />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}