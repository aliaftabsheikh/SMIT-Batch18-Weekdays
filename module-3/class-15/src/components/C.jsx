import React, {useContext} from 'react'
import {NameContext} from '../App'


const C = () => {
  const data = useContext(NameContext)
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h1>Role: {data.role}</h1>
      <h1>Famous Line: {data.famousLine}</h1>
    </div>
  )
}

export default C