# 🛍️ E-Commerce Platform

Platform e-commerce modern dan responsif yang dibuat dengan React.js, dilengkapi dengan fitur keranjang belanja, payment gateway, dan admin dashboard.

## ✨ Features

### Customer Features
- 🏪 **Product Catalog** - Browse produk dengan kategori dan filter
- 🔍 **Search & Filter** - Pencarian produk dan filter berdasarkan kategori, harga
- 🛒 **Shopping Cart** - Tambah/hapus produk, update quantity
- ❤️ **Wishlist** - Simpan produk favorit
- 💳 **Checkout Process** - Proses checkout yang smooth
- 📦 **Order Tracking** - Lacak status pesanan
- 👤 **User Authentication** - Login/Register dengan email
- 📱 **Responsive Design** - Optimal di semua device

### Admin Features
- 📊 **Dashboard Analytics** - Overview penjualan dan statistik
- 📦 **Product Management** - CRUD produk
- 👥 **Customer Management** - Kelola data customer
- 🧾 **Order Management** - Kelola dan update status order

## 🛠️ Tech Stack

- **React.js** - UI Library
- **Redux Toolkit** - State Management
- **React Router** - Navigation
- **Firebase** - Backend & Authentication
- **Tailwind CSS** - Styling
- **Stripe API** - Payment Gateway (simulasi)
- **React Icons** - Icon Library

## 📦 Installation

```bash
# Install dependencies
npm install

# Setup Firebase
# 1. Buat project di Firebase Console
# 2. Copy konfigurasi ke .env file

# Run development server
npm run dev
```

## 🚀 Quick Start

1. Clone atau download project ini
2. Install dependencies dengan `npm install`
3. Setup Firebase configuration
4. Run `npm run dev`
5. Akses di `http://localhost:5173`

## 📁 Project Structure

```
ecommerce-platform/
├── src/
│   ├── components/
│   │   ├── common/         # Reusable components
│   │   ├── customer/       # Customer-facing components
│   │   └── admin/          # Admin dashboard components
│   ├── pages/              # Page components
│   ├── redux/              # Redux store & slices
│   ├── services/           # API services
│   ├── utils/              # Helper functions
│   └── App.jsx
├── public/
└── package.json
```

## 🎨 Demo Accounts

**Customer Account:**
- Email: customer@demo.com
- Password: demo123

**Admin Account:**
- Email: admin@demo.com
- Password: admin123

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔐 Environment Variables

Buat file `.env` di root folder:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
```

## 📸 Screenshots

(Screenshots akan ditambahkan setelah deployment)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

MIT License - feel free to use this project for learning purposes.

## 👨‍💻 Author

**Faridh Rizaldy**
- Website: [Portfolio](http://localhost:3000)
- GitHub: [@faridhrizaldy](https://github.com/faridhrizaldy)
- Email: faridhrizaldy@gmail.com
