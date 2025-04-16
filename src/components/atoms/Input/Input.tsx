import { ChangeEvent, FC } from "react";


type InputProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: "text" | "email" | "password";
    name?: string
}

const Input: FC<InputProps> = ({ value, onChange, placeholder, type = "text", name }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="input w-sm"
        />
    );
}

export default Input;
