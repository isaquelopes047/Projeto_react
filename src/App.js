import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Myheader from './Components/Headers.jsx';
import ToggleButton from './Components/Button.jsx';
import Body_app from './Components/Body.jsx';


class App extends Component {
  render(){
    return(
      <div className="App">
        <Myheader />
        <ToggleButton />
        <Body_app />
      </div>
    )
  }
}

export default App;
