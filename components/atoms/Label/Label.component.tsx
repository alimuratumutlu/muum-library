import React from "react";

type LabelProps = {
	htmlFor?: string; // Associating the label with a form element ID
	text: string; // Text content of the label
	variant?: "default" | "error" | "success";
	icon?: React.ReactNode; // Optional icon or node to display next to the label
	className?: string; // Additional custom classes
};

const Label: React.FC<LabelProps> = ({
	htmlFor,
	text,
	variant = "default",
	icon,
	className = "",
}) => {
	const variantStyles = {
		default: "text-gray-700",
		error: "text-red-500",
		success: "text-green-500",
	};

	return (
		<label
			htmlFor={htmlFor}
			className={`flex items-center space-x-2 ${variantStyles[variant]} ${className}`}
		>
			{icon && <span>{icon}</span>}
			<span>{text}</span>
		</label>
	);
};

export default Label;
