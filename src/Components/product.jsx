import React from 'react'
import { Link } from 'react-router-dom'

const product = () => {
  return (
    <div className=''>
      <h1>products</h1>
      <Link to={"/products/item1"} className='flex' >item1</Link>
      <Link to={"/products/item2"}  className='flex' >item2</Link>
      <Link to={"/products/item3"} className='flex' >item3</Link>
      </div>
  )
}

export default product