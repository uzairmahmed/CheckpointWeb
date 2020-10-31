import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/scrollbar.css'

import {theme} from './styles'

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
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&family=Montserrat&family=Poiret+One&family=Raleway&display=swap" rel="stylesheet"/>
      </head>

      <body style={{ backgroundColor: "#C2C7C7", overflowX: "hidden", }}>
        <NavBar />
        <Welcome />
        <Hosts />
        <Podcasts />
        <Contact />
        <Footer />
      </body>

      <style type="text/css">
          {`
            .btn {
              background-color: ` + theme.colors.lightAccent + `;
              color: ` + theme.colors.primary + `;
            }

            .btn:hover {
              background-color: ` + theme.colors.darkAccent + `;
              color: ` + theme.colors.secondary + `;
            }

            nav .navbar-nav .nav-link .active{
              color:` + theme.colors.accent + ` !important;
            }
            
            nav .navbar-nav .nav-link .active:hover{
              color: ` + theme.colors.darkAccent + ` !important;
            }
            
            nav .navbar-nav .nav-link a{
              color: ` + theme.colors.primary + ` !important;
            }

            nav .navbar-nav .nav-link a:hover{
              color: ` + theme.colors.darkAccent + ` !important;
            }
          `}
        </style>
    </div>
  );
}

export default App;
