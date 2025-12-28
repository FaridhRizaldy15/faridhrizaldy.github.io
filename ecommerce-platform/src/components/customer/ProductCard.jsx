import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa'
import { addToCart } from '../../redux/slices/cartSlice'
import { addToWishlist } from '../../redux/slices/wishlistSlice'
import toast from 'react-hot-toast'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(addToCart(product))
    toast.success(`${product.name} added to cart!`)
  }

  const handleAddToWishlist = (e) => {
    e.preventDefault()
    dispatch(addToWishlist(product))
    toast.success(`${product.name} added to wishlist!`)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <Link to={`/products/${product.id}`} className="card overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <button
            onClick={handleAddToCart}
            className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition transform hover:scale-110"
            title="Add to Cart"
          >
            <FaShoppingCart />
          </button>
          <button
            onClick={handleAddToWishlist}
            className="bg-white text-red-500 p-3 rounded-full hover:bg-gray-100 transition transform hover:scale-110"
            title="Add to Wishlist"
          >
            <FaHeart />
          </button>
        </div>

        {/* Stock Badge */}
        {product.stock < 10 && (
          <div className="absolute top-3 left-3">
            <span className="badge bg-red-500 text-white">
              Only {product.stock} left!
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <FaStar className="text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-gray-500">({product.reviews || 0})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary-600">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
