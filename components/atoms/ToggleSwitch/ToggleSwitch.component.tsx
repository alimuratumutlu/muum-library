import classNames from "classnames";
import React from "react";

type ToggleSwitchProps = {
	checked: boolean; // Whether the switch is checked (on)
	onChange: (checked: boolean) => void; // Callback when the switch is toggled
	size?: "small" | "medium" | "large"; // Size of the switch
	onColor?: string; // Tailwind color class for the on state
	offColor?: string; // Tailwind color class for the off state
	disabled?: boolean; // Whether the switch is disabled
	onLabel?: string; // Label for the on state
	offLabel?: string; // Label for the off state
	className?: string; // Additional custom classes
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
	checked,
	onChange,
	size = "medium",
	onColor = "bg-green-500",
	offColor = "bg-gray-300",
	disabled = false,
	onLabel,
	offLabel,
	className = "",
}) => {
	const sizeClasses = {
		small: "w-10 h-5",
		medium: "w-12 h-6",
		large: "w-16 h-8",
	};

	const knobClasses = {
		small: "w-4 h-4",
		medium: "w-5 h-5",
		large: "w-7 h-7",
	};

	return (
		<div
			className={classNames(
				"relative inline-flex items-center",
				sizeClasses[size],
				className,
				disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
			)}
			onClick={() => !disabled && onChange(!checked)}
			role="switch"
			aria-checked={checked}
			aria-disabled={disabled}
		>
			<span
				className={classNames(
					"absolute transition-colors duration-300 ease-in-out rounded-full",
					checked ? onColor : offColor,
					sizeClasses[size]
				)}
			></span>
			<span
				className={classNames(
					"absolute left-0 transition-transform duration-300 ease-in-out transform rounded-full bg-white",
					knobClasses[size],
					checked ? "translate-x-full" : "translate-x-0"
				)}
				style={{ marginLeft: "1px", marginRight: "1px" }}
			></span>
			{onLabel && offLabel && (
				<span
					className={classNames(
						"absolute left-0 right-0 flex items-center justify-center",
						sizeClasses[size],
						checked ? "text-white" : "text-gray-500"
					)}
				>
					{checked ? onLabel : offLabel}
				</span>
			)}
		</div>
	);
};

export default ToggleSwitch;
