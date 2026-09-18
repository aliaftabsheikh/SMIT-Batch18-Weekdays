import React from 'react'
import { useParams } from 'react-router'

const Product = () => {
  const { id } = useParams()
  return (
    <div>Product - {id}</div>
  )
}

export default Product