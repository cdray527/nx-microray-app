import React from 'react';
import classNames from 'classnames';
import { Iconify, IconifyProps } from '@design-system/components/atoms';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    icon?: IconifyProps; // Icon can be from Iconify
    iconUrl?: 'string'; // Icon Url
    iconPosition?: 'left' | 'right'; // Position of the icon
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    label,
    onClick,
    disabled = false,
    icon,
    iconUrl,
    iconPosition = 'left', // Default icon position to left
    ...props
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

    const renderIcon = () => {
        if (icon) {
            // If icon is from Iconify
            return <Iconify icon={icon} className="inline-block" width={20} />;
        } else if (iconUrl) {
            // If icon is a URL
            return <img src={iconUrl} alt="icon" className="inline-block w-5 h-5" />;
        }
        return null;
    };

    return (
        <button
            className={classNames(
                baseStyles,
                sizeStyles,
                variantStyles,
                disabledStyles,
                'flex items-center justify-center'
            )}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {(icon || iconUrl) && iconPosition === 'left' && renderIcon()}
            <span className={classNames(icon ? 'ml-2' : '')}>{label}</span>
            {(icon || iconUrl) && iconPosition === 'right' && renderIcon()}
        </button>
    );
};

export default Button;
