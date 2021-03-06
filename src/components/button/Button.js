import React from 'react';

function Button({text, handleClick}) {
  return (<button data-testid="button" onClick={handleClick}>{text}</button>)
}

export default Button;