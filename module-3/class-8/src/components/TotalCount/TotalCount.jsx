import "./TotalCount.css"

const TotalCount = ({ count }) => {
  return (
   <div className='counter_container'>
        <div className='counter_body'>
            <span className='counter-number'>{count}</span>
        </div>
    </div>
  )
}

export default TotalCount