import React,{ Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter} from "react-router-dom";



class App extends Component {
  render(){
    return (
        //So here we have two components Navbar and menu and they are in App component and this App component is used in index.js. 
        //So App component is paerent of menu component.
        <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
