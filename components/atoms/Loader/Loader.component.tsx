import React from "react";

type LoaderProps = {
	variant?: "spinner" | "dots" | "bars"; // Style variant of the loader
	size?: "small" | "medium" | "large"; // Size of the loader
	color?: string; // Tailwind color class
	speed?: "slow" | "normal" | "fast"; // Animation speed
	className?: string; // Additional custom classes
};

const Loader: React.FC<LoaderProps> = ({
	variant = "spinner",
	size = "medium",
	color = "text-blue-500",
	speed = "normal",
	className = "",
}) => {
	const sizeClasses = {
		small: "w-4 h-4",
		medium: "w-8 h-8",
		large: "w-12 h-12",
	};

	const speedClasses = {
		slow: "animate-slow",
		normal: "animate-normal",
		fast: "animate-fast",
	};

	const renderLoader = () => {
		switch (variant) {
			case "spinner":
				return (
					<svg
						className={`${sizeClasses[size]} ${color} ${speedClasses[speed]} ${className} animate-spin`}
						viewBox="0 0 50 50"
					>
						<circle
							className="opacity-25"
							cx="25"
							cy="25"
							r="20"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<circle
							className="opacity-75"
							cx="25"
							cy="25"
							r="20"
							stroke="currentColor"
							strokeWidth="4"
							strokeDasharray="90,150"
							strokeDashoffset="0"
						/>
					</svg>
				);
			case "dots":
				return (
					<div className={`flex space-x-2 ${className}`}>
						<div
							className={`${sizeClasses[size]} ${color} bg-current rounded-full ${speedClasses[speed]} animate-bounce`}
						></div>
						<div
							className={`${sizeClasses[size]} ${color} bg-current rounded-full ${speedClasses[speed]} animate-bounce200`}
						></div>
						<div
							className={`${sizeClasses[size]} ${color} bg-current rounded-full ${speedClasses[speed]} animate-bounce400`}
						></div>
					</div>
				);
			case "bars":
				return (
					<div className={`flex space-x-1 ${className}`}>
						<div
							className={`${sizeClasses[size]} ${color} bg-current ${speedClasses[speed]} animate-pulse`}
						></div>
						<div
							className={`${sizeClasses[size]} ${color} bg-current ${speedClasses[speed]} animate-pulse`}
						></div>
						<div
							className={`${sizeClasses[size]} ${color} bg-current ${speedClasses[speed]} animate-pulse`}
						></div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div role="status" aria-label="Loading">
			{renderLoader()}
		</div>
	);
};

export default Loader;
