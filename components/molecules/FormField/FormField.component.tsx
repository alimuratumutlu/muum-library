import React from "react";

import Input from "../../atoms/Input/Input.component";
import Label from "../../atoms/Label/Label.component";
import Text from "../../atoms/Text/Text.component";

type FormFieldProps = {
	id: string; // Unique identifier for the form field
	label: string; // Label for the input field
	type?: "text" | "email" | "password" | "number"; // Input type
	value: string; // Value of the input field
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Handler for input changes
	error?: string; // Error message to display
	helpText?: string; // Optional help text
	placeholder?: string; // Placeholder text for the input
	disabled?: boolean; // Whether the input is disabled
};

const FormField: React.FC<FormFieldProps> = ({
	id,
	label,
	type = "text",
	value,
	onChange,
	error,
	helpText,
	placeholder = "",
	disabled = false,
}) => {
	return (
		<div className="mb-4">
			<Label htmlFor={id} text={label} variant={error ? "error" : "default"} />
			<Input
				id={id}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				disabled={disabled}
				aria-invalid={!!error}
				aria-describedby={error ? `${id}-error` : undefined}
			/>
			{helpText && !error && (
				<Text size="sm" color="text-gray-500" className="mt-1">
					{helpText}
				</Text>
			)}
			{error && (
				<Text
					id={`${id}-error`}
					size="sm"
					color="text-red-500"
					className="mt-1"
				>
					{error}
				</Text>
			)}
		</div>
	);
};

export default FormField;
