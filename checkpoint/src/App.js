import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/scrollbar.css'

import NavBar from './sections/Navbar'
import Welcome from './sections/Welcome'
import Hosts from './sections/Hosts'
import Podcasts from './sections/Podcasts'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      
      <body style={{ backgroundColor: "#FFF", overflowX: "hidden", overflowY: "hidden" }}>
        <NavBar />
        <Welcome />
        <Hosts />
        <Podcasts />
        <Contact />
        <Footer />
      </body>
    </div>
  );
}

export default App;
