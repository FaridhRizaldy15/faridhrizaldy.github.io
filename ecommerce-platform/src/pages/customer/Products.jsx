import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <p className="text-gray-600">Products page - Coming soon!</p>
      <Link to="/" className="btn-primary mt-4 inline-block">Back to Home</Link>
    </div>
  )
}

export default Products
