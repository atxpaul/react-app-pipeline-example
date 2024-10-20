import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import Products from './components/Products'; // Import the Products component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Render Products component */}
        <Products />
      </header>
    </div>
  );
}

export default App;
