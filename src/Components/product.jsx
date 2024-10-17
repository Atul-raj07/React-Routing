import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const product = () => {
  return (
    <div className=''>
      <h1>products</h1>
      <Link to={"/products/item1"} className='flex' >item1</Link>
      <Link to={"/products/item2"}  className='flex' >item2</Link>
      <Link to={"/products/item3"} className='flex' >item3</Link>
      <hr className='h-[5px] bg-green-600 my-10' />
      <Outlet/>
      </div>
  )
}

export default product