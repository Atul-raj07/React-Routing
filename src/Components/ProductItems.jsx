import React from 'react'
import { useParams } from 'react-router-dom'

const ProductItems = () => {
    const params = useParams()
    
  return (
    <div>
        hlw{params.items}
    </div>
  )
}

export default ProductItems