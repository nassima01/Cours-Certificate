import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, color, bgHoverColor, size, text, borderRadius, width, borderColor }) => {
  const { setIsClicked, initialState } = useStateContext();

  const handleHover = (e) => {
    e.target.style.backgroundColor = bgHoverColor;
    e.target.style.color = 'white';
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = color;
  };

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{
        backgroundColor: 'transparent',
        color: color,
        border: `1px solid ${borderColor}`,
        borderRadius: borderRadius
      }}
      className={`text-${width} text-${size} px-4 py-2 w-${width}`}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      {icon} {text}
    </button>
  );
};

export default Button;