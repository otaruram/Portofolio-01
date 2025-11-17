# 🎯 Portofolio Oki Taruna Ramadhan

Portfolio website profesional untuk Machine Learning Engineer - menampilkan proyek AI end-to-end, artikel teknis, channel YouTube, dan informasi profesional lengkap.

## ✨ Features

- 🏠 **Home** - Halaman utama dengan informasi profil
- � **Artikel** - Kumpulan artikel tentang Machine Learning & AI
- �🚀 **Proyek** - Portfolio proyek AI end-to-end
- 📺 **Channel** - Konten YouTube dan edukasi
- 🌐 **Sosmed** - Link ke semua platform sosial media
- 🎨 **Modern UI** - Dengan shadcn/ui components dan Tailwind CSS
- 📱 **Responsive** - Optimized untuk semua perangkat
- ⚡ **Fast** - Dibangun dengan Vite untuk performa optimal

## 🚀 Tech Stack

- **React 18** + **TypeScript** - Modern React dengan type safety
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **React Router v6** - Client-side routing
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **TanStack Query** - Powerful data synchronization

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ atau Bun
- npm, yarn, pnpm, atau bun

### Langkah Instalasi

```sh
# Clone repository
git clone https://github.com/otaruram/Portofolio.git

# Masuk ke direktori project
cd Portofolio

# Install dependencies (pilih salah satu)
npm install
# atau
yarn install
# atau
pnpm install
# atau
bun install

# Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:8080`

## 🛠️ Available Scripts

```sh
# Development server
npm run dev

# Build untuk production
npm run build

# Build untuk development
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 Deployment

### ⚠️ PENTING: Solusi Error 404 saat Refresh

Project ini menggunakan **Client-Side Routing** dengan React Router. Saat di-deploy ke production, akan muncul **404 error** ketika:
- Refresh halaman di route selain home (`/artikel`, `/channel`, `/sosmed`, dll)
- Direct access ke URL spesifik

**Penyebab:** Server tidak tahu cara menangani route client-side dan mencari file yang tidak ada.

**Solusi:** Sudah disediakan konfigurasi untuk berbagai platform hosting:

### 🔵 Deploy ke Vercel

1. **File `vercel.json` sudah disediakan** untuk menangani routing
2. Push code ke GitHub
3. Import project di [Vercel](https://vercel.com)
4. Deploy otomatis akan berjalan

```sh
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy dari terminal
vercel
```

### 🟢 Deploy ke Netlify

1. **File `public/_redirects` sudah disediakan** untuk menangani routing
2. Build settings di Netlify:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

```sh
# Install Netlify CLI (optional)
npm i -g netlify-cli

# Deploy dari terminal
netlify deploy --prod
```

### 🟠 Deploy ke Platform Lain

Untuk platform hosting lain (GitHub Pages, Firebase, dll), pastikan konfigurasi untuk mengarahkan semua routes ke `index.html`.

**GitHub Pages:** Gunakan `HashRouter` sebagai alternatif:
```tsx
// Di src/App.tsx, ganti BrowserRouter dengan HashRouter
import { HashRouter as Router } from 'react-router-dom';
```

## 📁 Struktur Project

```
oki-s-kopi-susu-main/
├── public/
│   ├── _redirects          # Config untuk Netlify (solusi 404)
│   ├── robots.txt          # SEO configuration
│   └── [assets]            # Static files
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── AppSidebar.tsx # Sidebar navigation
│   │   ├── Layout.tsx     # Main layout wrapper
│   │   └── NavLink.tsx    # Custom navigation link
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Homepage
│   │   ├── Artikel.tsx    # Artikel page
│   │   ├── Proyek.tsx     # Proyek page
│   │   ├── Channel.tsx    # Channel page
│   │   ├── Sosmed.tsx     # Sosmed page
│   │   └── NotFound.tsx   # 404 page
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── assets/            # Images, fonts, etc
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── vercel.json            # Config untuk Vercel (solusi 404)
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies & scripts
```

## 🔧 Konfigurasi

### Routing Configuration
Project menggunakan React Router v6 dengan BrowserRouter untuk clean URLs tanpa hash (#).

Routes yang tersedia:
- `/` - Home
- `/artikel` - Artikel
- `/proyek` - Proyek
- `/channel` - Channel
- `/sosmed` - Sosmed
- `*` - Not Found (404)

### Styling
- Tailwind CSS untuk utility classes
- CSS variables untuk theming
- Component-specific styles di masing-masing file

## 🐛 Troubleshooting

### Error 404 saat Refresh di Production
**Masalah:** Halaman menampilkan 404 NOT_FOUND saat refresh atau direct access  
**Solusi:** Pastikan file `vercel.json` atau `public/_redirects` sudah ada dan ter-deploy dengan benar

### Build Error
```sh
# Clear cache dan reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```sh
# Ubah port di vite.config.ts
server: {
  port: 3000, // atau port lain yang tersedia
}
```

## 🤝 Contributing

Contributions, issues, dan feature requests sangat diterima!

1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 TODO

- [ ] Implementasi dark mode toggle
- [ ] Tambahkan animasi page transitions
- [ ] Integrasi dengan CMS untuk artikel
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Blog comment system

## 📄 License

© 2024 Oki Taruna Ramadhan. All rights reserved.

## 👤 Author

**Oki Taruna Ramadhan**
- GitHub: [@otaruram](https://github.com/otaruram)

---

⭐ **Jangan lupa berikan star jika project ini membantu!**

