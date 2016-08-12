import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router'
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Button from './components/Button.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
        <Main>
          <Button className="intro-btn btn btn-primary" btnCopy="Check Out Top 10 Threads" onClick={console.log('foobar')} />
        </Main>
    );
  }
}

export default App;
