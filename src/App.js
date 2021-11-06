import React,{ Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";//yo integrate react redux 
import { ConfigureStore } from "./Redux/configureStore";

const store=ConfigureStore();


class App extends Component {
  render(){
    return (
        //So here we have two components Navbar and menu and they are in App component and this App component is used in index.js. 
        //So App component is paerent of menu component.
        //We will need to surround ur app with provider so that store is available to all components in our app
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
