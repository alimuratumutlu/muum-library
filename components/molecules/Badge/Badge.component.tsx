import classNames from "classnames";
import React from "react";

type BadgeProps = {
	content: React.ReactNode; // Content of the badge (count, label, icon)
	type?: "success" | "error" | "warning" | "info"; // Style type of the badge
	size?: "small" | "medium" | "large"; // Size of the badge
	shape?: "rounded" | "pill"; // Shape of the badge
	className?: string; // Additional custom classes
};

const Badge: React.FC<BadgeProps> = ({
	content,
	type = "info",
	size = "medium",
	shape = "rounded",
	className = "",
}) => {
	const typeClasses = {
		success: "bg-green-500 text-white",
		error: "bg-red-500 text-white",
		warning: "bg-yellow-500 text-white",
		info: "bg-blue-500 text-white",
	};

	const sizeClasses = {
		small: "text-xs px-2 py-1",
		medium: "text-sm px-3 py-1.5",
		large: "text-base px-4 py-2",
	};

	const shapeClasses = {
		rounded: "rounded",
		pill: "rounded-full",
	};

	return (
		<span
			className={classNames(
				"inline-flex items-center justify-center font-semibold",
				typeClasses[type],
				sizeClasses[size],
				shapeClasses[shape],
				className
			)}
			role="status"
			aria-live="polite"
		>
			{content}
		</span>
	);
};

export default Badge;
