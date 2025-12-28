import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">ShopHub</h3>
            <p className="mb-4">
              Platform e-commerce terpercaya untuk kebutuhan belanja online Anda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="hover:text-primary-400 transition">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="hover:text-primary-400 transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="hover:text-primary-400 transition">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary-400 transition">Products</Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-primary-400 transition">My Orders</Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-primary-400 transition">Wishlist</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-primary-400 transition">Help Center</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary-400 transition">Track Order</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary-400 transition">Return & Refund</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary-400 transition">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Bandung, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <span>support@shophub.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 ShopHub. All rights reserved. Developed by <a href="http://localhost:3000" className="text-primary-400 hover:underline">Faridh Rizaldy</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
