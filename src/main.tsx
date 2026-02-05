import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!
const loader = document.getElementById("initial-loader")

// Remove loader immediately when React starts mounting
createRoot(root).render(<App />);

// Faster removal on mobile - don't wait for animations
if (loader) {
  // Use requestAnimationFrame for smoother removal
  requestAnimationFrame(() => {
    loader.style.opacity = '0'
    loader.style.transition = 'opacity 0.15s ease'
    setTimeout(() => {
      loader.style.display = 'none'
      loader.remove()
    }, 150)
  })
}
