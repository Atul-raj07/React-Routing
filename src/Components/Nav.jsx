import React from 'react'
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
 const backHandler = (e) => {
  navigate(-1)
 }
 const fowardHandler = (e) => {
  navigate(1)
 }
  return (
    <div className='flex items-center justify-between gap-10 bg-red-600'>
        <NavLink style={(e)=> e.isActive ? {textDecoration:"underline"}:{}} className={(e)=>`${e.isActive ? "text-yellow-500":""}`} to="/">home</NavLink>
        <NavLink style={(e)=> e.isActive ? {textDecoration:"underline"}:{}} className={(e)=>`${e.isActive ? "text-yellow-500":""}`} to="/about">about</NavLink>
        <NavLink style={(e)=> e.isActive ? {textDecoration:"underline"}:{}} className={(e)=>`${e.isActive ? "text-yellow-500":""}`} to="/services">service </NavLink>
        <NavLink style={(e)=> e.isActive ? {textDecoration:"underline"}:{}} className={(e)=>`${e.isActive ? "text-yellow-500":""}`} to="/products">products</NavLink>
        <div className='flex items-center  gap-2'>
        <span onClick={backHandler}><IoArrowBackCircleOutline size={"2em"}/></span>
        <span onClick={fowardHandler}><IoArrowForwardCircleOutline size={"2em"} /></span>
        </div>
    </div>
  )
}

export default Nav