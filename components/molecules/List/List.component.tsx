import classNames from "classnames";
import React from "react";

type ListItemProps<T> = {
	item: T;
	index: number;
	isSelected: boolean;
	onSelect: () => void;
};

type ListProps<T> = {
	items: T[]; // Array of items to be displayed
	renderItem: (props: ListItemProps<T>) => React.ReactNode; // Function to render each item
	isSelectable?: boolean; // Whether items are selectable
	emptyState?: React.ReactNode; // Content to display when the list is empty
	className?: string; // Additional custom classes
};

const List = <T,>({
	items,
	renderItem,
	isSelectable = false,
	emptyState = "No items available",
	className = "",
}: ListProps<T>) => {
	return (
		<ul className={classNames("divide-y divide-gray-200", className)}>
			{items.length === 0 && (
				<li className="p-4 text-gray-500">{emptyState}</li>
			)}
			{items.map((item, index) => {
				const [isSelected, setIsSelected] = React.useState(false);

				const handleSelect = () => {
					setIsSelected(!isSelected);
				};

				return (
					<li
						key={index}
						className={classNames("p-4 flex items-center", {
							"bg-blue-50": isSelected,
						})}
					>
						{isSelectable && (
							<input
								type="checkbox"
								checked={isSelected}
								onChange={handleSelect}
								className="mr-2"
								aria-checked={isSelected}
							/>
						)}
						{renderItem({
							item,
							index,
							isSelected,
							onSelect: handleSelect,
						})}
					</li>
				);
			})}
		</ul>
	);
};

export default List;
