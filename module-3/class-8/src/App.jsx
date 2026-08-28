import { useState } from 'react'
import './App.css'
// import Counter from './components/Counter/Counter'
// import TotalCount from './components/TotalCount/TotalCount'
import Login from './components/Login/Login'
import Home from './components/Home/Home'

const App = () => {
  //  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
    {
      isLoggedIn ? (
        <Home setIsLoggedIn={setIsLoggedIn}/> 
      ): (
         <Login setIsLoggedIn={setIsLoggedIn}/>
      )
    }
     
      
    </>
    // <div className='app'>
    //   <Counter count={count} handleCountChange={setCount} />

    //   <TotalCount count={count}/>
    // </div>

  
  )
}

export default App