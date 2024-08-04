import React from "react";

type ButtonProps = {
	variant?: "primary" | "secondary" | "danger";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "medium",
	disabled = false,
	children,
	onClick,
}) => {
	const baseStyles = `font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;

	const variantStyles = {
		primary: `bg-blue-500 hover:bg-blue-700 text-white`,
		secondary: `bg-gray-500 hover:bg-gray-700 text-white`,
		danger: `bg-red-500 hover:bg-red-700 text-white`,
	};

	const sizeStyles = {
		small: `text-xs`,
		medium: `text-sm`,
		large: `text-lg`,
	};

	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			}`}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
