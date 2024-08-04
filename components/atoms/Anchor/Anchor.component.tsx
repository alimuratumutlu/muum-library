import React from "react";

type AnchorProps = {
	href: string; // URL for the link
	text: string; // Text content of the link
	variant?: "default" | "primary" | "secondary"; // Style variant
	icon?: React.ReactNode; // Optional icon to display alongside the link text
	iconPosition?: "left" | "right"; // Position of the icon relative to the text
	target?: "_self" | "_blank"; // Target behavior for the link
	className?: string; // Additional custom classes
	rel?: string; // Relationship between the current document and the linked resource
};

const Anchor: React.FC<AnchorProps> = ({
	href,
	text,
	variant = "default",
	icon,
	iconPosition = "left",
	target = "_self",
	className = "",
	rel,
}) => {
	const variantStyles = {
		default: "text-blue-500 hover:text-blue-700",
		primary: "text-white bg-blue-500 hover:bg-blue-700",
		secondary: "text-gray-700 hover:text-gray-900",
	};

	const determineRel = () => {
		if (rel) return rel;
		if (target === "_blank") return "noopener noreferrer";
		return "";
	};

	return (
		<a
			href={href}
			target={target}
			rel={determineRel()}
			className={`inline-flex items-center space-x-2 ${variantStyles[variant]} ${className}`}
		>
			{icon && iconPosition === "left" && <span>{icon}</span>}
			<span>{text}</span>
			{icon && iconPosition === "right" && <span>{icon}</span>}
		</a>
	);
};

export default Anchor;
