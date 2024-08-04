import * as TablerIcons from "@tabler/icons-react";
import React from "react";

type IconProps = {
	name: keyof typeof TablerIcons;
	size?: "small" | "medium" | "large"; // Controling the icon size
	color?: string; // Tailwind color class
	className?: string; // Additional custom classes
};

const Icon: React.FC<IconProps> = ({
	name,
	size = "medium",
	color = "current",
	className = "",
}) => {
	const IconComponent = TablerIcons[name];

	const sizeClasses = {
		small: "h-4 w-4",
		medium: "h-6 w-6",
		large: "h-8 w-8",
	};

	return (
		<IconComponent
			className={`${sizeClasses[size]} text-${color} ${className}`}
			stroke={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	);
};

export default Icon;
