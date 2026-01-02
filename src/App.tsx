import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './page/Home'
import Menu from './page/Menu'
import About from './page/About'
import Contact from './page/Contact'

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <header className="app-header">
      </header>

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
