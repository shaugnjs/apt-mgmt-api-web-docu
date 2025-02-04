```markdown
# API Documentation Site

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Backend API should be running (for testing endpoints)

## Dependencies Installed
```bash
# Core Dependencies
npm install react                  # React framework
npm install react-dom              # React DOM
npm install react-router-dom       # Routing
npm install @heroicons/react       # Icons
npm install prism-react-renderer   # Code highlighting
npm install axios                  # HTTP client

# Development Dependencies
npm install -D @vitejs/plugin-react      # Vite React plugin
npm install -D tailwindcss               # CSS framework
npm install -D @tailwindcss/typography   # Typography plugin
npm install -D postcss                   # CSS transformation
npm install -D autoprefixer              # CSS prefixer
```

## Project Structure
```
api-docs/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx         # Navigation bar
│   │   │   ├── Sidebar.jsx        # Documentation sidebar
│   │   │   └── Layout.jsx         # Main layout wrapper
│   │   └── common/
│   │       ├── CodeBlock.jsx      # Code syntax highlighting
│   │       └── LoadingSpinner.jsx  # Loading indicator
│   ├── pages/
│   │   ├── Home.jsx              # Landing page
│   │   ├── Introduction.jsx      # API introduction
│   │   ├── Installation.jsx      # Setup guide
│   │   ├── FrontendOverview.jsx  # UI screenshots
│   │   ├── ApiReference.jsx      # API endpoints
│   │   └── About.jsx             # Team information
│   ├── assets/                   # Static assets
│   └── App.jsx                   # Main app component
├── public/
│   ├── screenshots/              # UI screenshots
│   └── team/                     # Team member photos
├── index.html
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
├── vite.config.js               # Vite configuration
└── package.json                 # Project manifest
```

## Installation Steps

1. Create New Vite Project
```bash
npm create vite@latest api-docs -- --template react
cd api-docs
```

2. Install Dependencies
```bash
# Install core dependencies
npm install react-router-dom @heroicons/react prism-react-renderer axios

# Install dev dependencies
npm install -D tailwindcss postcss autoprefixer @tailwindcss/typography
```

3. Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

4. Start Development Server
```bash
npm run dev
```
The documentation site will be available at: `http://localhost:5173`

## Configuration Files

1. `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

2. `postcss.config.js`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Available Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Content

1. Screenshots:
- Add images to `public/screenshots/`
- Reference in components as `/screenshots/image.png`

2. Team Photos:
- Add to `public/team/`
- Reference in components as `/team/photo.jpg`

## Common Issues & Solutions

1. Styling Issues:
```bash
# Rebuild Tailwind CSS
npm run build:css

# Clear cache and node modules
rm -rf node_modules
npm install
```

2. Component Issues:
- Check import paths
- Verify component exports
- Clear browser cache

3. Build Issues:
```bash
# Clean install
rm -rf node_modules
rm package-lock.json
npm install
```