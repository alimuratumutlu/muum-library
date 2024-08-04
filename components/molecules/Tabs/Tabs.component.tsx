import classNames from "classnames";
import React, { useState } from "react";

type Tab = {
	label: string;
	icon?: React.ReactNode;
	content: React.ReactNode;
};

type TabsProps = {
	tabs: Tab[]; // Array of tabs to display
	initialActiveIndex?: number; // Initial active tab index
	className?: string; // Additional custom classes
};

const Tabs: React.FC<TabsProps> = ({
	tabs,
	initialActiveIndex = 0,
	className = "",
}) => {
	const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

	return (
		<div className={className}>
			<div className="flex border-b border-gray-200">
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={classNames(
							"flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-500 focus:outline-none",
							{
								"border-b-2 border-blue-500 text-blue-500":
									index === activeIndex,
							}
						)}
						onClick={() => setActiveIndex(index)}
						role="tab"
						aria-selected={index === activeIndex}
						aria-controls={`tab-panel-${index}`}
						id={`tab-${index}`}
					>
						{tab.icon && <span className="mr-2">{tab.icon}</span>}
						{tab.label}
					</button>
				))}
			</div>
			<div>
				{tabs.map((tab, index) => (
					<div
						key={index}
						className={classNames("p-4", {
							hidden: index !== activeIndex,
						})}
						role="tabpanel"
						aria-labelledby={`tab-${index}`}
						id={`tab-panel-${index}`}
					>
						{tab.content}
					</div>
				))}
			</div>
		</div>
	);
};

export default Tabs;
