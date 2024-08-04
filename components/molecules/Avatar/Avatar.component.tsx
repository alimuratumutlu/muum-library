import { IconUser } from "@tabler/icons-react";
import classNames from "classnames";
import React from "react";

type AvatarProps = {
	src?: string; // Image source for the avatar
	alt?: string; // Alt text for the avatar
	initials?: string; // Initials to display when the image is not available
	size?: "small" | "medium" | "large"; // Size of the avatar
	status?: "online" | "offline" | null; // Status indicator
	shape?: "circle" | "square"; // Shape of the avatar
	className?: string; // Additional custom classes
};

const Avatar: React.FC<AvatarProps> = ({
	src,
	alt,
	initials,
	size = "medium",
	status = null,
	shape = "circle",
	className = "",
}) => {
	const sizeClasses = {
		small: "w-8 h-8 text-sm",
		medium: "w-12 h-12 text-base",
		large: "w-16 h-16 text-lg",
	};

	const statusClasses = {
		online: "bg-green-500",
		offline: "bg-red-500",
	};

	return (
		<div className={classNames("relative", className)}>
			<div
				className={classNames(
					"flex items-center justify-center overflow-hidden bg-gray-200",
					sizeClasses[size],
					shape === "circle" ? "rounded-full" : "rounded-md"
				)}
				aria-label={alt}
			>
				{src ? (
					<img src={src} alt={alt} className="object-cover w-full h-full" />
				) : (
					<div className="flex items-center justify-center w-full h-full text-gray-500">
						{initials || <IconUser className="w-6 h-6" />}
					</div>
				)}
			</div>
			{status && (
				<span
					className={classNames(
						"absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full",
						statusClasses[status]
					)}
				/>
			)}
		</div>
	);
};

export default Avatar;
