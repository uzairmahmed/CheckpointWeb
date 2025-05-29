import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Episodes from './components/Episodes'
import Hosts from './components/Hosts'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Episodes lightBg={true} />
      <Hosts lightBg={true} />
      <Contact lightBg={true} />
      <Footer />
    </>
  )
}

export default App
