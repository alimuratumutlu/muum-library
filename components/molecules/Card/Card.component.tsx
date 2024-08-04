import classNames from "classnames";
import React from "react";

type CardProps = {
	header?: React.ReactNode; // Optional header content
	content: React.ReactNode; // Main content of the card
	footer?: React.ReactNode; // Optional footer content
	variant?: "default" | "outlined" | "shadowed"; // Card style variant
	className?: string; // Additional custom classes
};

const Card: React.FC<CardProps> = ({
	header,
	content,
	footer,
	variant = "default",
	className = "",
}) => {
	const variantClasses = {
		default: "bg-white border border-gray-200",
		outlined: "border border-gray-300",
		shadowed: "bg-white shadow-lg",
	};

	return (
		<div
			className={classNames(
				"rounded-lg overflow-hidden",
				variantClasses[variant],
				className
			)}
		>
			{header && (
				<div className="px-4 py-2 bg-gray-100 border-b border-gray-200">
					{header}
				</div>
			)}
			<div className="px-4 py-3">{content}</div>
			{footer && (
				<div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
					{footer}
				</div>
			)}
		</div>
	);
};

export default Card;
