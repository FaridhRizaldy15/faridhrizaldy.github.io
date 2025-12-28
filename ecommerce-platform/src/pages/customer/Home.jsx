import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { FaShoppingCart, FaArrowRight, FaTruck, FaShieldAlt, FaHeadset, FaUndo } from 'react-icons/fa'
import { setProducts } from '../../redux/slices/productsSlice'
import ProductCard from '../../components/customer/ProductCard'

const Home = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)

  useEffect(() => {
    // Mock data - dalam produksi, fetch dari API
    const mockProducts = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 299000,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
        category: 'Electronics',
        rating: 4.5,
        stock: 50
      },
      {
        id: 2,
        name: 'Smart Watch Pro',
        price: 899000,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
        category: 'Electronics',
        rating: 4.8,
        stock: 30
      },
      {
        id: 3,
        name: 'Running Shoes',
        price: 450000,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        category: 'Fashion',
        rating: 4.6,
        stock: 100
      },
      {
        id: 4,
        name: 'Backpack Travel',
        price: 350000,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        category: 'Fashion',
        rating: 4.7,
        stock: 75
      }
    ]
    
    dispatch(setProducts(mockProducts))
  }, [dispatch])

  const features = [
    {
      icon: <FaTruck className="text-4xl text-primary-600" />,
      title: 'Free Shipping',
      description: 'Gratis ongkir untuk pembelian di atas Rp 500.000'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-600" />,
      title: 'Secure Payment',
      description: 'Transaksi aman dengan enkripsi SSL'
    },
    {
      icon: <FaHeadset className="text-4xl text-primary-600" />,
      title: '24/7 Support',
      description: 'Customer service siap membantu kapan saja'
    },
    {
      icon: <FaUndo className="text-4xl text-primary-600" />,
      title: 'Easy Return',
      description: 'Return produk mudah dalam 14 hari'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Belanja Online Jadi Lebih Mudah
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Temukan ribuan produk berkualitas dengan harga terbaik. Belanja sekarang dan nikmati berbagai promo menarik!
              </p>
              <div className="flex gap-4">
                <Link to="/products" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2">
                  Shop Now <FaArrowRight />
                </Link>
                <Link to="/products" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition">
                  Browse Products
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600" 
                alt="Shopping" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Produk pilihan terbaik untuk Anda</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8">Daftar sekarang dan dapatkan voucher diskon 50rb!</p>
          <Link to="/register" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
