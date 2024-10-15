import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex items-center gap-10 bg-red-600'>
        <NavLink style={(e)=> e.isActive ? {textDecoration:"underline"}:{}} className={(e)=>`${e.isActive ? "text-yellow-500":""}`} to="/">home</NavLink>
        <NavLink style={(e)=> e.isActive ? {textDecoration:"underline"}:{}} className={(e)=>`${e.isActive ? "text-yellow-500":""}`} to="/about">about</NavLink>
        <NavLink style={(e)=> e.isActive ? {textDecoration:"underline"}:{}} className={(e)=>`${e.isActive ? "text-yellow-500":""}`} to="/services">service </NavLink>
        <NavLink style={(e)=> e.isActive ? {textDecoration:"underline"}:{}} className={(e)=>`${e.isActive ? "text-yellow-500":""}`} to="/products">products</NavLink>
    </div>
  )
}

export default Nav