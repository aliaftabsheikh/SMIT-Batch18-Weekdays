import './Counter.css'

const Counter = ({count, handleCountChange}) => {
   

  return (
    <div className='counter_container'>
        <div className='counter_body'>
            <button className='counter-btn' onClick={()=> handleCountChange(count - 1)}>-</button>
            <span className='counter-number'>{count}</span>
            <button className='counter-btn' onClick={()=> handleCountChange(count + 1)}>+</button>
        </div>
    </div>
  )
}

export default Counter