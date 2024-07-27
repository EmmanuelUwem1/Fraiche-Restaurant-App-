import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
// import  { motion } from 'framer-motion'
// pages
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Oops from './Pages/Oops'
import Header from './Components/Header.jsx'
import Footer from './Sections/Footer.jsx'




const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Oops />
    },
    {
      path: '/menu',
      element: <Menu />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/gallery',
      element: <Gallery />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence   >
    <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>
)
