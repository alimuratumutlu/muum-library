import React from "react";

type RadioButtonProps = {
	name: string; // Name attribute for grouping radio buttons
	value: string; // Value attribute for the radio button
	checked: boolean; // Whether the radio button is checked
	onChange: (value: string) => void; // Handler for change events
	label?: string; // Optional label to display next to the radio button
	variant?: "default" | "primary" | "secondary"; // Visual style variant
	disabled?: boolean; // Whether the radio button is disabled
	className?: string; // Additional custom classes
};

const RadioButton: React.FC<RadioButtonProps> = ({
	name,
	value,
	checked,
	onChange,
	label,
	variant = "default",
	disabled = false,
	className = "",
}) => {
	const variantStyles = {
		default: "text-gray-700",
		primary: "text-blue-500",
		secondary: "text-green-500",
	};

	return (
		<label
			className={`flex items-center space-x-2 ${variantStyles[variant]} ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			} ${className}`}
		>
			<input
				type="radio"
				name={name}
				value={value}
				checked={checked}
				onChange={() => onChange(value)}
				disabled={disabled}
				className={`form-radio h-4 w-4 ${
					checked ? variantStyles[variant] : ""
				}`}
				aria-label={label || value}
			/>
			{label && <span>{label}</span>}
		</label>
	);
};

export default RadioButton;
