# 🖥️ PC eShop

> A modern e-commerce platform for computer hardware, built with Vue 3, Vite, and TypeScript

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-16%2B-green.svg)
![Vue](https://img.shields.io/badge/vue-3.x-green.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)

<div align="center">

### ⚡ Fast, Modern & Scalable Computer Hardware eShop Platform

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** — Beautiful and responsive design for all devices
- ⚡ **High Performance** — Optimized with Vite and Vue 3 best practices
- 📱 **Mobile First** — Fully responsive and mobile-friendly interface
- 🛒 **Complete eShop** — Product catalog, filters, cart, and checkout
- 🔍 **Advanced Search** — Instant product search with filters and categories
- 💾 **Local Storage** — Cart persistence using browser storage
- 🎯 **TypeScript** — Fully typed codebase for reliability and maintainability
- 🚀 **SEO Optimized** — Production-ready with SEO best practices
- 🌙 **Dark Mode Support** — Beautiful dark theme (coming soon)
- ♿ **Accessible** — WCAG compliant with proper accessibility features

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Vue** | 3.x | Progressive JavaScript framework |
| **Vite** | 5.x | Next generation build tool |
| **TypeScript** | 5.x | Type-safe JavaScript |
| **Vue Router** | 4.x | Official router for Vue.js |
| **Pinia** | 2.x | Store management (optional) |
| **CSS3** | Latest | Styling and animations |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** version 16.0 or higher ([Download](https://nodejs.org/))
- **npm** version 8.0 or higher (comes with Node.js)
- **Git** for version control

```bash
# Check your versions
node --version    # v16.0.0 or higher
npm --version     # 8.0.0 or higher
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/1Parad0x/pc-eshop.git
cd pc-eshop
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages from `package.json`.

---

## 🚀 Usage

### Development Server with Hot-Reload

Start the development server with instant hot module reloading:

```bash
npm run dev
```

The application will be available at: `http://localhost:5173`

Changes to your code will automatically reflect in the browser without refreshing.

### Build for Production

Compile and minify the project for production deployment:

```bash
npm run build
```

Optimized files will be generated in the `dist/` directory, ready for deployment.

### Type Checking

Run TypeScript type checking:

```bash
npm run type-check
```

This ensures all TypeScript code is properly typed and has no type errors.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

Serves the `dist/` directory to test the production build.

---

## 📁 Project Structure

```
pc-eshop/
├── src/
│   ├── components/        # Reusable Vue components
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── ProductCard.vue
│   │   └── ...
│   ├── pages/            # Page components (routes)
│   │   ├── Home.vue
│   │   ├── Shop.vue
│   │   ├── ProductDetail.vue
│   │   └── Cart.vue
│   ├── stores/           # Pinia state management
│   │   ├── products.ts
│   │   ├── cart.ts
│   │   └── user.ts
│   ├── router/           # Vue Router configuration
│   │   └── index.ts
│   ├── assets/           # Static assets
│   │   ├── styles/
│   │   ├── images/
│   │   └── icons/
│   ├── types/            # TypeScript type definitions
│   │   ├── product.ts
│   │   └── order.ts
│   ├── utils/            # Utility functions and helpers
│   │   ├── api.ts
│   │   └── validators.ts
│   ├── App.vue           # Root component
│   └── main.ts           # Application entry point
├── public/               # Public static files
├── .vscode/              # VS Code settings
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TS config
├── tsconfig.node.json    # Node-specific TS config
├── package.json          # Project dependencies
├── package-lock.json     # Locked dependency versions
└── README.md             # This file
```

---

## ⚙️ Configuration

### VS Code Setup (Recommended)

For the best development experience, install these extensions:

1. **Vue - Official** — Official Vue 3 extension
   - Publisher: Vue
   - ID: `Vue.volar`

2. **TypeScript Vue Plugin (Volar)** — TypeScript support in `.vue` files
   - Publisher: Vue
   - ID: `Vue.vscode-typescript-vue-plugin`

3. **ESLint** — JavaScript/TypeScript linter (optional)

4. **Prettier** — Code formatter (optional)

**Important:** Disable **Vetur** if you have it installed, as it conflicts with Volar.

### Browser DevTools

#### Chrome / Edge / Brave:
- [Vue.js DevTools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- Enable Custom Object Formatter in DevTools Settings

#### Firefox:
- [Vue.js DevTools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- Enable Custom Object Formatter in DevTools Settings

---

## 📝 Available Scripts

```bash
# Start development server with hot-reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type-check the entire project
npm run type-check

# Lint code (if configured)
npm run lint

# Format code (if configured)
npm run format

# Install new dependency
npm install <package-name>

# Remove dependency
npm uninstall <package-name>

# Update all dependencies
npm update

# Clean install (if you have dependency issues)
rm -rf node_modules package-lock.json
npm install
```

---

## 🔗 Useful Documentation

- [Vue 3 Official Docs](https://vuejs.org/) - Learn Vue 3
- [Vite Documentation](https://vite.dev/) - Build tool guide
- [Vue Router Guide](https://router.vuejs.org/) - Routing documentation
- [Pinia Documentation](https://pinia.vuejs.org/) - State management
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript reference

---

## 🌐 Deployment

The project can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

### GitHub Pages
Update `vite.config.ts` with your repository name and push to GitHub.

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 🤝 Contributing

Contributions are welcome! We appreciate your help in making this project better.

### How to Contribute

1. **Fork** the repository
   ```bash
   git clone https://github.com/1Parad0x/pc-eshop.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Write clean, readable code
   - Add comments where necessary
   - Follow the existing code style

4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues

### Guidelines

- Follow Vue 3 composition API best practices
- Ensure TypeScript types are properly defined
- Test your changes before submitting
- Update documentation if needed
- Keep commits atomic and well-described

---

## 🐛 Reporting Issues

Found a bug? Please create an issue with:
- Clear title and description
- Steps to reproduce the bug
- Expected and actual behavior
- Your environment (OS, Node version, etc.)
- Screenshots if applicable

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
You are free to:
- ✅ Use commercially
- ✅ Modify the code
- ✅ Distribute
- ✅ Use privately

Under the condition that:
- ⚠️ A copy of the license is included with the code

---

## 👨‍💻 Author

**1Parad0x**

- GitHub: [@1Parad0x](https://github.com/1Parad0x)
- Email: Contact via GitHub

---

## 🙏 Acknowledgments

- [Vue.js Team](https://vuejs.org/) for the amazing framework
- [Vite Team](https://vitejs.dev/) for the lightning-fast build tool
- All contributors and users who support this project

---

## 📈 Project Stats

![GitHub](https://img.shields.io/badge/language-Vue%203%2FTypeScript-green)
![Code Size](https://img.shields.io/github/languages/code-size/1Parad0x/pc-eshop)
![Last Commit](https://img.shields.io/github/last-commit/1Parad0x/pc-eshop)

---

## ⭐ Support

If you find this project helpful, please consider:
- ⭐ Giving it a star on GitHub
- 🔗 Sharing it with your network
- 💬 Providing feedback and suggestions
- 🐛 Reporting bugs and issues
- 🤝 Contributing to the project

---

<div align="center">

**Made with ❤️ for computer enthusiasts worldwide**

[⬆ Back to Top](#-pc-eshop)

---

**Star this repo** if you find it useful! ⭐

</div>
