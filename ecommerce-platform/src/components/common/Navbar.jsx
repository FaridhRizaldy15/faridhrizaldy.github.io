import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { 
  FaShoppingCart, 
  FaHeart, 
  FaUser, 
  FaBars, 
  FaTimes,
  FaSearch 
} from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  const { totalQuantity } = useSelector(state => state.cart)
  const { items: wishlistItems } = useSelector(state => state.wishlist)
  const { isAuthenticated, user } = useSelector(state => state.auth)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary-600">
            ShopHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary-600 transition">
              Products
            </Link>
            <Link to="/orders" className="text-gray-700 hover:text-primary-600 transition">
              My Orders
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            {/* Search Icon */}
            <button 
              onClick={toggleSearch}
              className="text-gray-700 hover:text-primary-600 transition hidden md:block"
            >
              <FaSearch className="text-xl" />
            </button>

            {/* Wishlist */}
            <Link 
              to="/wishlist" 
              className="relative text-gray-700 hover:text-primary-600 transition"
            >
              <FaHeart className="text-xl" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link 
              to="/cart" 
              className="relative text-gray-700 hover:text-primary-600 transition"
            >
              <FaShoppingCart className="text-xl" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {/* User */}
            {isAuthenticated ? (
              <Link 
                to="/profile" 
                className="text-gray-700 hover:text-primary-600 transition flex items-center gap-2"
              >
                <FaUser className="text-xl" />
                <span className="hidden md:inline">{user?.name}</span>
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="btn-primary text-sm py-2 px-4"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-700 text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fadeIn">
            <input
              type="text"
              placeholder="Search products..."
              className="input-field"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary-600 py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-primary-600 py-2"
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link 
                to="/orders" 
                className="text-gray-700 hover:text-primary-600 py-2"
                onClick={toggleMenu}
              >
                My Orders
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
