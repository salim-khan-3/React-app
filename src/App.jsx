import { BioProvider } from "./Components/hooks/ContextApi"
import { About } from "./Components/hooks/ContextApi/About"
import { Home } from "./Components/hooks/ContextApi/Home"



export const App = () =>{
  return (
    <BioProvider>
      <Home/>
      <About/>
    </BioProvider>
  )
}
