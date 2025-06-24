import { useContext } from "react"
import { BioContext } from "."

export const Home = () =>{

    const {myName,myAge} = useContext(BioContext)

    return(
        <h1>Hello context api. my name is {myName} my age is {myAge}</h1>
    )
}