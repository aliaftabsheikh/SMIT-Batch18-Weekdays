import React, {createContext} from 'react'
import A from './components/A'

const NameContext = createContext()

const App = () => {
  
  return (

    // USECONTEXT HOOK 

    <NameContext.Provider value={{
      name: "Chippa man",
      role: "Content Creator",
      famousLine: "Chippa sahab that's it !"
    }}>
      <div>
        <A />
      </div>
    </NameContext.Provider>
  
  )
}

export default App
// eslint-disable-next-line react-refresh/only-export-components
export {NameContext}