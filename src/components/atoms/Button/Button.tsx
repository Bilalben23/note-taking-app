import { FC } from "react";


type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "error";
    type?: "button" | "submit" | "reset";
}


const Button: FC<ButtonProps> = ({ children, onClick, variant = "primary", type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn rounded-lg btn-${variant}`
            }
        >
            {children}
        </button >
    );
}

export default Button;
