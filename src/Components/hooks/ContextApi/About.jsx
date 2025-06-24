import { useContext } from "react"
import { BioContext } from "."

export const About = () =>{

    const {myName,myAge} = useContext(BioContext)

    return(
        <h1>Hello context api (About page). my name is {myName} my age is {myAge}</h1>
    )
}