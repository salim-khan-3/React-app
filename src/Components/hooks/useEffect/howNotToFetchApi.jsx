import { useState } from "react"

export const HowNotToFetchApi = () =>{
    const [apiData,setApiData] = useState([])
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>setApiData(data))
    .catch((error)=>console.log(error))
    return (
        <div className="api_Container">
            <ul>data:
                {
                    apiData.map((currentElement)=>{
                        return(
                            <li key={currentElement.id}>{currentElement.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}