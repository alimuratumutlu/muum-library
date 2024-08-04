import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

type DropdownProps = {
	trigger: React.ReactNode; // Element that triggers the dropdown
	items: { label: string; onClick: () => void }[]; // List of dropdown items
	position?: "bottom" | "top" | "left" | "right"; // Position of the dropdown
	className?: string; // Additional custom classes
};

const Dropdown: React.FC<DropdownProps> = ({
	trigger,
	items,
	position = "bottom",
	className = "",
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	// Toggle the dropdown menu
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// Close the dropdown when clicking outside
	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	// Add event listener for outside clicks
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Positioning styles
	const positionClasses = {
		bottom: "top-full left-0 mt-1",
		top: "bottom-full left-0 mb-1",
		left: "right-full top-0 mr-1",
		right: "left-full top-0 ml-1",
	};

	return (
		<div className="relative inline-block" ref={dropdownRef}>
			<div onClick={toggleDropdown} className="cursor-pointer">
				{trigger}
			</div>
			{isOpen && (
				<div
					className={classNames(
						"absolute z-50 w-48 bg-white border border-gray-200 rounded shadow-md",
						positionClasses[position],
						className
					)}
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="dropdown-menu"
				>
					{items.map((item, index) => (
						<div
							key={index}
							className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
							onClick={() => {
								item.onClick();
								setIsOpen(false);
							}}
							role="menuitem"
						>
							{item.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
