
interface ButtonProps {
    buttonText: string;
}


const Button: React.FC<ButtonProps> = ({ buttonText }) => {
    return (
        <div>
            <button>{buttonText}</button>
        </div>
    );
};

export default Button;