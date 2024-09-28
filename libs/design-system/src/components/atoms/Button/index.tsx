// Button.tsx
import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    label: string; // Replaced children with label of type string
    onClick?: () => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    label, // Now using label instead of children
    onClick,
    disabled = false
}) => {
    const baseStyles = 'rounded focus:outline-none font-bold transition-colors duration-200';
    const sizeStyles = {
        small: 'text-sm py-1 px-3',
        medium: 'text-base py-2 px-4',
        large: 'text-lg py-3 px-6'
    }[size];

    const variantStyles = {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
    }[variant];

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
        <button
            className={classNames(baseStyles, sizeStyles, variantStyles, disabledStyles)}
            onClick={onClick}
            disabled={disabled}
        >
            {label} {/* Render the label here */}
        </button>
    );
};

export default Button;
