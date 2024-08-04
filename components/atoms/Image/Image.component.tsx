import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

type ImageProps = {
	src: string;
	alt: string;
	width?: string;
	height?: string;
	className?: string;
	placeholderSrc?: string;
	loadingIndicator?: React.ReactNode;
};

const Image: React.FC<ImageProps> = ({
	src,
	alt,
	width = "auto",
	height = "auto",
	className = "",
	placeholderSrc = "https://via.placeholder.com/150", // Fallback placeholder image
	loadingIndicator = (
		<span className="animate-pulse bg-gray-200 rounded-full w-full h-full block"></span>
	),
}) => {
	const { ref, inView } = useInView({
		triggerOnce: true, // Trigger only once when in view
		rootMargin: "50px 0px", // Load images just before they enter the viewport
	});

	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);

	return (
		<div
			ref={ref}
			style={{ width, height }}
			className={`relative overflow-hidden ${className}`}
		>
			{!loaded && !error && loadingIndicator}
			<img
				src={inView ? src : undefined}
				alt={alt}
				onLoad={() => setLoaded(true)}
				onError={() => setError(true)}
				className={`transition-opacity duration-500 ${
					loaded ? "opacity-100" : "opacity-0"
				} w-full h-full object-cover`}
				style={{ display: error ? "none" : "block" }}
			/>
			{error && (
				<img
					src={placeholderSrc}
					alt="placeholder"
					className="w-full h-full object-cover"
				/>
			)}
		</div>
	);
};

export default Image;
