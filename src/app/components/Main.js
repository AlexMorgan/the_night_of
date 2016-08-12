import React, { Component } from 'react';
import Nav from './Nav.js';

// We can either create a React Component here or
const Main = (props) => {
    // var {children} = props; -- Optional: Talk to max about this pattern specifically for children props

    return (
        <div className="App">
          <Nav />
          {props.children}
        </div>
    )
}

export default Main;
