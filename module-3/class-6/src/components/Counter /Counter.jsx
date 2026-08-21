import React, {useState, useEffect} from 'react'
import './Counter.css'




const Counter = () => {

const [count, setCount] = useState(0)
const [totalCount, setTotalCount] = useState(0)



// useEffect(() => {
//   alert('Count has been updated:' + count);
// }, [count]);








  return (
    <div className="counter">
      <h2>Counter</h2>

      <div className="counter__container">
        <button className="counter__button" onClick={() => setCount(count - 1)}>
          -
        </button>
        <span className="counter__value">{count}</span>
        <button className="counter__button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>

         <div className="counter__container">
        <button className="counter__button" onClick={() => setTotalCount(totalCount - 1)}>
          -
        </button>
        <span className="counter__value">{totalCount}</span>
        <button className="counter__button" onClick={() => setTotalCount(totalCount + 1)}>
          +
        </button>
      </div>



    </div>


  )
}

export default Counter