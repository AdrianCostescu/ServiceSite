import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './component/Menu';
import Footer from './component/Footer';
import Send from './component/Send';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ErrorPage from './Pages/ErrorPage';
import Review from './Pages/Review';
import About from './Pages/About';

function App() {

  const [menuClick, setMenuClick] = useState(false)

  return (
    <Router>
      <Menu menuClick = {menuClick} setMenuClick = {setMenuClick}/>
      <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path='/service' element={<Services />} />
        <Route path='/form' element={<Send />} />
        <Route path='/review' element={<Review />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
