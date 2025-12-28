import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaTrash, FaShoppingBag } from 'react-icons/fa'
import { removeFromCart, updateQuantity } from '../../redux/slices/cartSlice'
import toast from 'react-hot-toast'

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  const handleRemove = (id, name) => {
    dispatch(removeFromCart(id))
    toast.success(`${name} removed from cart`)
  }

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }))
    }
  }

  if (items.length === 0) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
          <Link to="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart ({totalQuantity} items)</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.id} className="card p-4 flex gap-4">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-grow">
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                <p className="text-primary-600 font-bold">{formatPrice(item.price)}</p>
              </div>

              <div className="flex flex-col justify-between items-end">
                <button
                  onClick={() => handleRemove(item.id, item.name)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>

                <div className="flex items-center gap-2 border rounded">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg">
                <span className="font-bold">Total</span>
                <span className="font-bold text-primary-600">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            <Link to="/checkout" className="btn-primary w-full mb-3">
              Proceed to Checkout
            </Link>
            <Link to="/products" className="btn-outline w-full">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
