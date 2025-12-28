import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  filteredProducts: [],
  categories: ['All', 'Electronics', 'Fashion', 'Home & Living', 'Sports', 'Books'],
  selectedCategory: 'All',
  searchQuery: '',
  priceRange: [0, 1000],
  loading: false,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
      state.filteredProducts = action.payload
    },
    
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload
      state.filteredProducts = action.payload === 'All'
        ? state.products
        : state.products.filter(product => product.category === action.payload)
    },
    
    searchProducts: (state, action) => {
      state.searchQuery = action.payload
      state.filteredProducts = state.products.filter(product =>
        product.name.toLowerCase().includes(action.payload.toLowerCase()) ||
        product.description.toLowerCase().includes(action.payload.toLowerCase())
      )
    },
    
    filterByPriceRange: (state, action) => {
      state.priceRange = action.payload
      state.filteredProducts = state.products.filter(
        product => product.price >= action.payload[0] && product.price <= action.payload[1]
      )
    },
    
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const { 
  setProducts, 
  filterByCategory, 
  searchProducts, 
  filterByPriceRange, 
  setLoading 
} = productsSlice.actions

export default productsSlice.reducer
