import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/scrollbar.css'

import NavBar from './sections/Navbar'
import Welcome from './sections/Welcome'
import Hosts from './sections/Hosts'

function App() {
  return (
    <div> 
      <body style={{ backgroundColor: "#FFF", overflowX:"hidden"}}>
        <NavBar />
        <Welcome />
        <Hosts />
      </body>
    </div>
  );
}

export default App;
