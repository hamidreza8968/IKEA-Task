import { InputProps } from '../../../interfaces/IInput.ts';
import './Input.css';

const Input = ({ type, placeholder, value, onChange, className } : InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`search-input ${className}`}
        />
    );
};

export default Input;
