import React from "react";

type CheckboxProps = {
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	label?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
	checked,
	onChange,
	disabled = false,
	label,
}) => {
	return (
		<label
			className={`flex items-center space-x-2 ${disabled ? "opacity-50" : ""}`}
		>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
			/>
			{label && <span className="text-gray-700">{label}</span>}
		</label>
	);
};

export default Checkbox;
