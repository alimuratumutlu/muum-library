import classNames from "classnames";
import React, { useRef, useState } from "react";

type TooltipProps = {
	content: React.ReactNode; // Content to display inside the tooltip
	position?: "top" | "right" | "bottom" | "left"; // Position of the tooltip
	delay?: number; // Delay in milliseconds for showing/hiding the tooltip
	arrow?: boolean; // Whether to display an arrow pointing to the target
	className?: string; // Additional custom classes
	children: React.ReactNode; // The element that triggers the tooltip
};

const Tooltip: React.FC<TooltipProps> = ({
	content,
	position = "top",
	delay = 0,
	arrow = true,
	className = "",
	children,
}) => {
	const [visible, setVisible] = useState(false);
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
	const tooltipRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		if (delay) {
			const id = setTimeout(() => setVisible(true), delay);
			setTimeoutId(id);
		} else {
			setVisible(true);
		}
	};

	const handleMouseLeave = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		setVisible(false);
	};

	const positionClasses = {
		top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
		right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
		bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
		left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
	};

	const arrowClasses = {
		top: "bottom-0 left-1/2 transform -translate-x-1/2 border-t-gray-700",
		right: "left-0 top-1/2 transform -translate-y-1/2 border-r-gray-700",
		bottom: "top-0 left-1/2 transform -translate-x-1/2 border-b-gray-700",
		left: "right-0 top-1/2 transform -translate-y-1/2 border-l-gray-700",
	};

	return (
		<div
			className="relative inline-block"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleMouseEnter}
			onBlur={handleMouseLeave}
		>
			{children}
			{visible && (
				<div
					ref={tooltipRef}
					className={classNames(
						"absolute z-10 p-2 text-white text-sm bg-gray-700 rounded shadow-md",
						positionClasses[position],
						className
					)}
					role="tooltip"
				>
					{content}
					{arrow && (
						<div
							className={classNames(
								"absolute w-0 h-0 border-4 border-transparent",
								arrowClasses[position]
							)}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Tooltip;
