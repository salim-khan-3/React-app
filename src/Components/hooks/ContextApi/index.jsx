import { createContext } from "react";

// 1st step 
export const BioContext =  createContext();

// 2nd step 
export const BioProvider = ({children}) => {

    const myName = "md salim islam"
    const myAge = 30;

    return <BioContext.Provider value={{myName,myAge}}>
        {children}
    </BioContext.Provider>
}