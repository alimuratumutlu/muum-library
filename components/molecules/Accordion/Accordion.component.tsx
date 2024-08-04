import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import classNames from "classnames";
import React, { useState } from "react";

type AccordionItem = {
	header: string;
	content: React.ReactNode;
};

type AccordionProps = {
	items: AccordionItem[]; // Array of accordion items
	allowMultipleOpen?: boolean; // Whether multiple items can be open at once
	className?: string; // Additional custom classes
};

const Accordion: React.FC<AccordionProps> = ({
	items,
	allowMultipleOpen = false,
	className = "",
}) => {
	const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

	// Toggle the open state of an accordion item
	const toggleItem = (index: number) => {
		const newOpenIndexes = new Set(openIndexes);
		if (newOpenIndexes.has(index)) {
			newOpenIndexes.delete(index);
		} else {
			if (!allowMultipleOpen) {
				newOpenIndexes.clear();
			}
			newOpenIndexes.add(index);
		}
		setOpenIndexes(newOpenIndexes);
	};

	return (
		<div className={classNames("space-y-2", className)}>
			{items.map((item, index) => (
				<div key={index} className="border border-gray-200 rounded shadow-sm">
					<button
						className="flex justify-between items-center w-full px-4 py-2 text-left text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none"
						onClick={() => toggleItem(index)}
						aria-expanded={openIndexes.has(index)}
						aria-controls={`accordion-content-${index}`}
						id={`accordion-header-${index}`}
					>
						<span>{item.header}</span>
						<span>
							{openIndexes.has(index) ? (
								<IconChevronUp className="w-5 h-5" />
							) : (
								<IconChevronDown className="w-5 h-5" />
							)}
						</span>
					</button>
					<div
						id={`accordion-content-${index}`}
						role="region"
						aria-labelledby={`accordion-header-${index}`}
						className={classNames(
							"overflow-hidden transition-all duration-300",
							{
								"max-h-0": !openIndexes.has(index),
								"max-h-screen": openIndexes.has(index),
							}
						)}
					>
						<div className="px-4 py-2">{item.content}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordion;
