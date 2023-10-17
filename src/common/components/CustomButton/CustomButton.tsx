import React from 'react';
import './style.scss';

type CustomButtonProps = {
  bgColor?: string;
  borderColor?: string;
  width?: string | number;
  textColor?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor,
  borderColor,
  width,
  textColor,
  children,
  type,
  onClick,
}) => (
  <button
    className="custom-btn"
    style={{
      backgroundColor: bgColor,
      borderColor: borderColor,
      width: width,
      color: textColor,
    }}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
