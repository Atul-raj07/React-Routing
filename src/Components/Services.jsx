import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
console.log("lalalal");
navigate("/")
// navigate(-1)
  }
  return (
    <div>
      <h1>services </h1>
      <form onSubmit={submitHandler}>
      <button >suvbmiit</button>
      </form>
    </div>
  )
}

export default Services