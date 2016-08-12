import React, { PropTypes } from 'react';

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

// PropType validation
Button.propTypes = {
  btnCopy: PropTypes.string,
  className: PropTypes.string
};
