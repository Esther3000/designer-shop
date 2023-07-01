import './App.css';
import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './pages/navbar';
import Search from './pages/search';
import Container from '@mui/material/Container';


function App() {
  

  return (
    <>
    
    <Navbar />
    
    <LandingPage />
    <div class="search-container">
   <Container>
   <Search />
   </Container>
   </div>
  
    </>
  )
}

export default App
