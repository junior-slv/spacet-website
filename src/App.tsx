import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Destino from './components/Destino/Destino';

function App() {
  return ( 
    <>
      <Header/>
      <main className="main">
        <Home/>
        <Destino/>
      </main>
    </>
  );
}

export default App;
