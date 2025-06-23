import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Hero from './components/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export default App
