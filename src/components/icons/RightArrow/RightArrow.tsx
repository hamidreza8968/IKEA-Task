import { ArrowProps } from '../../../interfaces/IArrow';

const RightArrow = ({ size = 16, color = 'currentColor', className, style }: ArrowProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            viewBox="0 0 16 16"
            className={className}
            style={style}
        >
            <path fillRule="evenodd" d="M4.646 14.354a.5.5 0 0 1 0-.708L10.293 8 4.646 2.354a.5.5 0 1 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708 0z" />
        </svg>
    );
};

export default RightArrow;
