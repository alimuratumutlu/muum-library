import classNames from "classnames";
import React from "react";

type TextProps = {
	color?: string; // Tailwind color class or custom color
	gradient?: { from: string; to: string }; // Gradient configuration
	inherit?: boolean; // Inherit font properties from parent
	inline?: boolean; // Set line-height to 1
	lineClamp?: number; // Number of lines to show before truncating
	size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"; // Font size
	span?: boolean; // Render as span instead of p
	truncate?: "start" | "end"; // Truncate text from start or end
	className?: string; // Additional custom classes
	children: React.ReactNode; // Text content
};

const Text: React.FC<TextProps> = ({
	color = "text-gray-900",
	gradient,
	inherit = false,
	inline = false,
	lineClamp,
	size = "md",
	span = false,
	truncate,
	className = "",
	children,
}) => {
	const baseClass = span ? "span" : "p";

	const sizeClasses = {
		xs: "text-xs",
		sm: "text-sm",
		md: "text-base",
		lg: "text-lg",
		xl: "text-xl",
		"2xl": "text-2xl",
	};

	const truncateClass =
		truncate === "start"
			? "truncate"
			: truncate === "end"
			? "truncate-end"
			: "";

	const gradientStyle = gradient
		? {
				background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
				WebkitBackgroundClip: "text",
				WebkitTextFillColor: "transparent",
		  }
		: {};

	const computedClassNames = classNames(
		sizeClasses[size],
		color,
		inherit ? "inherit" : "",
		inline ? "inline" : "",
		lineClamp ? `line-clamp-${lineClamp}` : "",
		truncateClass,
		className
	);

	return (
		<baseClass className={computedClassNames} style={gradientStyle}>
			{children}
		</baseClass>
	);
};

export default Text;
