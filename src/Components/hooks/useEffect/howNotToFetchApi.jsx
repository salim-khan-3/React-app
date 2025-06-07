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
                            <li key={currentElement.id}>
                                <h1>{currentElement.title}</h1>
                                <p>{currentElement.body}</p>
                                </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}