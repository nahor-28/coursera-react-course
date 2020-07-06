import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menuComponent';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: DISHES
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              <img src={logo} className="App-logo" alt="logo"/>
              React
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={ this.state.food }/>
      </div>
    );
  }
}

export default App;
