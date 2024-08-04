import React from "react";

type InputProps = {
	type?: "text" | "email" | "password" | "number";
	placeholder?: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	error?: boolean;
};

const Input: React.FC<InputProps> = ({
	type = "text",
	placeholder = "",
	value,
	onChange,
	disabled = false,
	error = false,
}) => {
	const baseStyles = `appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

	const errorStyles = error
		? "border-red-500"
		: "border-gray-300 focus:border-blue-500";

	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			disabled={disabled}
			className={`${baseStyles} ${errorStyles} ${
				disabled ? "bg-gray-100 cursor-not-allowed" : ""
			}`}
		/>
	);
};

export default Input;
