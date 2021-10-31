import logo from './logo.svg';
import React,{ Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import './App.css';
import { render } from '@testing-library/react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){
    return (
        //So here we have two components Navbar and menu and they are in App component and this App component is used in index.js. 
        //So App component is paerent of menu component.
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>      
      </div>
    );
  }
}

export default App;
