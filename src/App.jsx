import React, { use, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Episodes from './components/Episodes'
import Hosts from './components/Hosts'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    fetch("/api/hello")
    .then(res => res.json())
    .then(data => console.log(data.message)) // Should log "Hello World"
    .catch(err => console.error("API error:", err));
  }
  , [])
  return (
    <>
      <Navbar />
      <Hero />
      <Episodes lightBg={true} />
      <Hosts lightBg={false} />
      <Contact lightBg={true} />
      <Footer />
    </>
  )
}

export default App
