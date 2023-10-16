import React from 'react';
import './style.scss';

type CustomButtonProps = {
  bgColor?: string;
  borderColor?: string;
  width?: string | number;
  textColor?: string;
  children: React.ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({ bgColor, borderColor, width, textColor, children }) => (
  <button
    className="custom-btn"
    style={{
      backgroundColor: bgColor,
      borderColor: borderColor,
      width: width,
      color: textColor,
    }}
  >
    {children}
  </button>
);

export default CustomButton;
