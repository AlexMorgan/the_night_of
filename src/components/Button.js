import React, { Component, PropTypes } from 'react';

/*
    the render(){} method is reserved for React components only.
    If you want to create a stateless functional component you can do so below
*/

const Button = props => {
    // Ask Max: This method of variable instantiation is called destructuring
    var {
      className,
      btnCopy,
    } = props;

    return(
        <button className={className}>{ btnCopy }</button>
    )
}

export default Button;

Button.propTypes = {
  copy: PropTypes.string,
};
