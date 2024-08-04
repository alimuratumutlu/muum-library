import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

type PopoverProps = {
	content: React.ReactNode; // Content to display inside the popover
	position?: "top" | "right" | "bottom" | "left"; // Position of the popover
	closeOnOutsideClick?: boolean; // Whether to close the popover when clicking outside
	className?: string; // Additional custom classes
	children: React.ReactNode; // The element that triggers the popover
};

const Popover: React.FC<PopoverProps> = ({
	content,
	position = "bottom",
	closeOnOutsideClick = true,
	className = "",
	children,
}) => {
	const [visible, setVisible] = useState(false);
	const popoverRef = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			popoverRef.current &&
			!popoverRef.current.contains(event.target as Node)
		) {
			setVisible(false);
		}
	};

	useEffect(() => {
		if (closeOnOutsideClick && visible) {
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}
	}, [closeOnOutsideClick, visible]);

	const toggleVisibility = () => {
		setVisible(!visible);
	};

	const positionClasses = {
		top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
		right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
		bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
		left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
	};

	return (
		<div className="relative inline-block" ref={popoverRef}>
			<div onClick={toggleVisibility} className="cursor-pointer">
				{children}
			</div>
			{visible && (
				<div
					className={classNames(
						"absolute z-10 p-4 bg-white border border-gray-200 rounded shadow-lg",
						positionClasses[position],
						className
					)}
					role="dialog"
				>
					{content}
				</div>
			)}
		</div>
	);
};

export default Popover;
