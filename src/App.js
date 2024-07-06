// src/App.js
import React from 'react';
import { Container } from '@mui/material';
import CardList from './components/CardList';
import './App.css'

function App() {
  return (
    <Container>
      
     <div className='text'>
        <div><h1>Eigenplus Webapps</h1></div>
     </div>
      <div className='container2'><CardList /></div>
      
    </Container>
  );
}

export default App;
