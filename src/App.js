import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            <img src={logo} className="App-logo" alt="logo"/>
            React
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
