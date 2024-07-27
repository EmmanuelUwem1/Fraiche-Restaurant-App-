import React, { useState } from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import "./App.css"

// pages
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Oops from './Pages/Oops'
import Header from './Components/Header.jsx'
function App() {
  

  return (
        <>
        <Router >
          {/* <Header/> */}
            {/* <Routes>
              <Route path='/' exact component={Home} />
              <Route path='/menu' exact component={Menu} />
              <Route path='/about' exact component={About} />
              <Route path='/gallery' exact component={Gallery} />
              <Route path='/contact' exact component={Contact} />
              
            </Routes> */}
        </Router >
        
        </>

       
  )
}

export default App
