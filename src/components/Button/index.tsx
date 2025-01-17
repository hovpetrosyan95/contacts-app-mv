// src/components/Button.tsx
import React from 'react';

// Define the props type
interface ButtonProps {
    text: string;                          // The text to display on the button
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // The click handler
    style?: React.CSSProperties;           // Optional custom styles
    disabled?: boolean;                    // Optional disabled state
    type?: "button" | "submit" | "reset";   // Button type (default is "button")
}

const btnStyle = 'mr-8 px-2 py-2 rounded hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 border-1 border-gray-500 shadow-lg';


// Button component
const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    style = {},
    disabled = false,
    type = "button",
}) => {
    let additionalStyle = 'text-blue-500';
    if (type === 'reset') {
        additionalStyle = 'text-red-500';
    }
    return (
        <button
            type={type}
            onClick={onClick}
            style={style}
            disabled={disabled}
            className={`${btnStyle} ${additionalStyle}`}
        >
            {text}
        </button>
    );
};

export default Button;
