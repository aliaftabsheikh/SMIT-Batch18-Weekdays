import React, { useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const [total, setTotal] = React.useState(0)

//! Run on every render

    // useEffect(() => {
    //   alert('Counter component mounted')
    // })

// ! Run only on first render

    // useEffect(() => {
    //   alert('Counter component mounted')
    // }, [])

// ! Run on first render and when count changes

    useEffect(() => {
      alert('Counter component mounted')

      return () => {
        alert('Counter component unmounted')
      }
    }, [count, total])
    
   
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>



        <p>Total: {total}</p>
        <button onClick={() => setTotal(total + 1)}>Increment Total</button>
    </div>
  )
}

export default Counter