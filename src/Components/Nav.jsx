import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex items-center gap-10 bg-red-600'>
        <Link  to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/services">service </Link>
        <Link to="/products">products</Link>
    </div>
  )
}

export default Nav