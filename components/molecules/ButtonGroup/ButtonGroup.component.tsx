import classNames from "classnames";
import React from "react";

type ButtonProps = {
	label: string;
	icon?: React.ReactNode;
	onClick: () => void;
	type?: "primary" | "secondary" | "success" | "danger";
};

type ButtonGroupProps = {
	buttons: ButtonProps[];
	size?: "small" | "medium" | "large";
	orientation?: "horizontal" | "vertical";
	className?: string;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
	buttons,
	size = "medium",
	orientation = "horizontal",
	className = "",
}) => {
	const sizeClasses = {
		small: "px-2 py-1 text-sm",
		medium: "px-3 py-2 text-base",
		large: "px-4 py-3 text-lg",
	};

	const typeClasses = {
		primary: "bg-blue-500 hover:bg-blue-600 text-white",
		secondary: "bg-gray-500 hover:bg-gray-600 text-white",
		success: "bg-green-500 hover:bg-green-600 text-white",
		danger: "bg-red-500 hover:bg-red-600 text-white",
	};

	return (
		<div
			className={classNames(
				"inline-flex",
				{
					"flex-col": orientation === "vertical",
					"flex-row": orientation === "horizontal",
				},
				className
			)}
		>
			{buttons.map((button, index) => (
				<button
					key={index}
					onClick={button.onClick}
					className={classNames(
						"flex items-center justify-center border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
						sizeClasses[size],
						typeClasses[button.type || "primary"],
						{
							"rounded-l": index === 0 && orientation === "horizontal",
							"rounded-r":
								index === buttons.length - 1 && orientation === "horizontal",
							"rounded-t": index === 0 && orientation === "vertical",
							"rounded-b":
								index === buttons.length - 1 && orientation === "vertical",
							"-ml-px": index !== 0 && orientation === "horizontal",
							"-mt-px": index !== 0 && orientation === "vertical",
						}
					)}
					aria-label={button.label}
				>
					{button.icon && <span className="mr-2">{button.icon}</span>}
					{button.label}
				</button>
			))}
		</div>
	);
};

export default ButtonGroup;
