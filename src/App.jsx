import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Section from './section/Section'
import BlogPage from './examples/BlogPage'
import Landing from './examples/Landing'
import Sections from './sections/Sections.jsx'

function App() {

  return (
    <BrowserRouter>


      {/*  */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/sections" element={<Sections />} />
      </Routes>
      {/* <Footer /> */}


    </BrowserRouter>
  )
}

export default App
