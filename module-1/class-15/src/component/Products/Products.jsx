import React, { useEffect, useState } from 'react'

const Products = () => {

    const [count, setCount] = useState(0)
    const [liked, setLiked] = useState(0)

    // First : SIDE EFFECT
    // Second: Cleanup function
    // Third : Dependency Array

    useEffect(() => {
     alert('Hello World ')
    }, [])

    useEffect(()=>{
        alert("LIKED added !")
    }, [liked])
    

  return (
    <>
    <div>Products</div>

<button className='bg-black text-white' onClick={()=> setCount(count + 1)}>ADD</button>
<p>{count}</p>

<button className='bg-black text-white' onClick={()=> setLiked(liked + 1)}>LIked</button>

<p>{liked}</p>
    </>
  )
}

export default Products