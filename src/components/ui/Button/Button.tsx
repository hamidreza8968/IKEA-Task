import './Button.css';
import { ButtonProps } from '../../../interfaces/IButton.ts';

const Button = ({
                                           children,
                                           onClick,
                                           disabled = false,
                                           type = 'button',
                                           className = '',
                                       } : ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={`custom-button ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
