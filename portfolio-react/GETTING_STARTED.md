# 🚀 Quick Start Guide

## Cara Menjalankan Portfolio

### Prerequisites
Pastikan sudah terinstall:
- Node.js (v16 atau lebih baru)
- NPM (biasanya sudah include dengan Node.js)

### Step 1: Install Dependencies
Buka terminal/command prompt di folder `portfolio-react`, kemudian jalankan:

```bash
npm install
```

### Step 2: Run Development Server

**Untuk Windows (PowerShell):**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev
```

**Untuk Mac/Linux:**
```bash
npm run dev
```

### Step 3: Open Browser
Server akan berjalan di `http://localhost:3000` (atau port lain jika 3000 sudah digunakan)

Browser akan otomatis terbuka, atau bisa manual buka link yang muncul di terminal.

## 🎨 Customize Portfolio

### 1. Ganti Informasi Personal

**Hero Section** (`src/components/Hero.jsx`)
- Ganti nama, title, dan description
- Update social media links

**About Section** (`src/components/About.jsx`)
- Edit bio dan informasi personal
- Ganti email, phone, lokasi

**Contact Section** (`src/components/Contact.jsx`)
- Update contact information
- Konfigurasi form (jika perlu integrate dengan backend)

### 2. Update Skills

Edit `src/components/Skills.jsx`:
- Tambah/kurangi skill di array `skillCategories`
- Adjust skill level (0-100)
- Ganti icon jika perlu

### 3. Tambah Projects

Edit `src/components/Projects.jsx`:
- Tambah project baru ke array `projects`
- Ganti image placeholder dengan gambar project asli
- Update GitHub & demo links
- Set `featured: true` untuk highlight project

### 4. Ubah Warna Theme

Edit `src/index.css` di bagian `:root`:

```css
:root {
  --primary-color: #0d6efd;      /* Warna utama */
  --secondary-color: #e2edff;     /* Warna background */
  --dark-color: #1a1a1a;          /* Warna teks gelap */
  /* ... */
}
```

### 5. Tambah/Ganti Foto Profile

Untuk menambah foto:
1. Simpan foto di folder `public/images/`
2. Edit `src/components/About.jsx`
3. Ganti `<div className="photo-placeholder">` dengan:
```jsx
<img src="/images/profile.jpg" alt="Profile" />
```

## 📱 Test Responsive

Buka Chrome DevTools (F12) dan klik icon device toolbar untuk test di berbagai ukuran layar:
- Mobile: 375px - 480px
- Tablet: 768px - 1024px
- Desktop: 1200px+

## 🌐 Deploy Portfolio

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Login ke [vercel.com](https://vercel.com)
3. Import repository
4. Deploy! (automatic)

### Deploy ke Netlify

1. Build project: `npm run build`
2. Drag & drop folder `dist/` ke [netlify.com](https://netlify.com)

## ⚡ Performance Tips

1. **Optimize Images**: Gunakan format WebP dan compress images
2. **Lazy Loading**: Images di-load saat dibutuhkan
3. **Code Splitting**: React sudah handle ini by default
4. **Minify Build**: `npm run build` sudah minify otomatis

## 🐛 Troubleshooting

### Port 3000 sudah digunakan?
Server akan otomatis menggunakan port lain (3001, 3002, etc.)

### Execution Policy Error (Windows)?
Run: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`

### Module not found?
Run: `npm install` lagi

### Build error?
1. Delete folder `node_modules` dan `package-lock.json`
2. Run `npm install` lagi
3. Run `npm run dev`

## 📞 Need Help?

Email: faridrizaldy@gmail.com

---

Happy Coding! 🎉
