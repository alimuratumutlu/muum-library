import React from "react";

type DividerProps = {
	orientation?: "horizontal" | "vertical";
	thickness?: string;
	color?: string;
	variant?: "solid" | "dashed" | "dotted";
	label?: React.ReactNode;
	labelPosition?: "start" | "center" | "end";
	className?: string;
};

const Divider: React.FC<DividerProps> = ({
	orientation = "horizontal",
	thickness = "1px",
	color = "gray-300",
	variant = "solid",
	label,
	labelPosition = "center",
	className = "",
}) => {
	const baseStyles =
		orientation === "horizontal"
			? `w-full border-t-${thickness}`
			: `h-full border-l-${thickness}`;

	const variantStyles = {
		solid: "",
		dashed: "border-dashed",
		dotted: "border-dotted",
	};

	const labelStyles = `flex items-center ${
		orientation === "horizontal" ? "flex-row" : "flex-col"
	}`;

	const labelPositionStyles = {
		start: "justify-start",
		center: "justify-center",
		end: "justify-end",
	};

	return (
		<div
			className={`${labelStyles} ${labelPositionStyles[labelPosition]} ${className}`}
		>
			{label && labelPosition === "start" && (
				<span className="mx-2">{label}</span>
			)}
			<div
				className={`${baseStyles} ${variantStyles[variant]} border-${color} flex-grow`}
				role="separator"
			/>
			{label && labelPosition === "center" && (
				<span className="mx-2">{label}</span>
			)}
			{label && labelPosition === "end" && (
				<span className="mx-2">{label}</span>
			)}
		</div>
	);
};

export default Divider;
