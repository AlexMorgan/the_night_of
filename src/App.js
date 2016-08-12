import React, { Component } from 'react';
import logo from './ass/img/the-night-of.jpg';
import Button from './components/Button.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Button className="intro-btn btn btn-primary" btnCopy="Check Out Top 10 Threads" />
      </div>
    );
  }
}

export default App;
