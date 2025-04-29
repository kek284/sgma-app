import React from 'react';
import './../styles/Button.css';

const Button = ({ onClick, text = '', icon }) => {
    return (
      <button className="custom-button" onClick={onClick}>
        {icon && <span className="button-icon">{icon}</span>}
        {text && <span className="button-text">{text}</span>}
      </button>
    );
  };

export default Button;
