import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    //So here we have two components Navbar and menu and they are in App component and this App component is used in index.js. 
    //So App component is paerent of menu component.
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>      
    </div>
  );
}

export default App;
