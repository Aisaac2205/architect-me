import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!
const loader = document.getElementById("initial-loader")

createRoot(root).render(<App />);

// Remove initial loader after React mounts
if (loader) {
  loader.style.opacity = '0'
  setTimeout(() => loader.remove(), 300)
}
