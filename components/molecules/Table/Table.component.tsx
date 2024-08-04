import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import classNames from "classnames";
import React, { useState } from "react";

type TableColumn<T> = {
	label: string; // Display label for the column
	accessor: keyof T; // Key of the data item to access the value
	sortable?: boolean; // Whether the column is sortable
	renderCell?: (item: T) => React.ReactNode; // Custom rendering function for the cell
};

type TableProps<T> = {
	columns: TableColumn<T>[]; // Array of columns to display
	data: T[]; // Data to display in the table
	isSelectable?: boolean; // Whether rows are selectable
	emptyState?: React.ReactNode; // Content to display when the table is empty
	className?: string; // Additional custom classes
};

const Table = <T,>({
	columns,
	data,
	isSelectable = false,
	emptyState = "No data available",
	className = "",
}: TableProps<T>) => {
	const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
	const [sortConfig, setSortConfig] = useState<{
		key: keyof T;
		direction: "asc" | "desc";
	} | null>(null);

	// Toggle the selection of a row
	const toggleRowSelection = (index: number) => {
		const newSelectedRows = new Set(selectedRows);
		if (newSelectedRows.has(index)) {
			newSelectedRows.delete(index);
		} else {
			newSelectedRows.add(index);
		}
		setSelectedRows(newSelectedRows);
	};

	// Handle sorting when a column header is clicked
	const handleSort = (column: TableColumn<T>) => {
		if (!column.sortable) return;
		let direction: "asc" | "desc" = "asc";
		if (
			sortConfig &&
			sortConfig.key === column.accessor &&
			sortConfig.direction === "asc"
		) {
			direction = "desc";
		}
		setSortConfig({ key: column.accessor, direction });
	};

	// Sort data based on the sort configuration
	const sortedData = React.useMemo(() => {
		if (!sortConfig) return data;
		const { key, direction } = sortConfig;
		return [...data].sort((a, b) => {
			if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
			if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
			return 0;
		});
	}, [data, sortConfig]);

	return (
		<table
			className={classNames("min-w-full divide-y divide-gray-200", className)}
		>
			<thead className="bg-gray-50">
				<tr>
					{isSelectable && <th className="px-6 py-3"></th>}
					{columns.map((column, index) => (
						<th
							key={index}
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
							onClick={() => handleSort(column)}
						>
							<div className="flex items-center">
								{column.label}
								{column.sortable && (
									<span className="ml-1">
										{sortConfig && sortConfig.key === column.accessor ? (
											sortConfig.direction === "asc" ? (
												<IconChevronUp className="w-4 h-4" />
											) : (
												<IconChevronDown className="w-4 h-4" />
											)
										) : (
											<IconChevronUp className="w-4 h-4 opacity-0" />
										)}
									</span>
								)}
							</div>
						</th>
					))}
				</tr>
			</thead>
			<tbody className="bg-white divide-y divide-gray-200">
				{sortedData.length === 0 && (
					<tr>
						<td
							colSpan={columns.length + (isSelectable ? 1 : 0)}
							className="px-6 py-4 text-center text-gray-500"
						>
							{emptyState}
						</td>
					</tr>
				)}
				{sortedData.map((item, index) => (
					<tr
						key={index}
						className={classNames({ "bg-blue-50": selectedRows.has(index) })}
					>
						{isSelectable && (
							<td className="px-6 py-4">
								<input
									type="checkbox"
									checked={selectedRows.has(index)}
									onChange={() => toggleRowSelection(index)}
									aria-checked={selectedRows.has(index)}
								/>
							</td>
						)}
						{columns.map((column, colIndex) => (
							<td key={colIndex} className="px-6 py-4 text-sm text-gray-500">
								{column.renderCell
									? column.renderCell(item)
									: item[column.accessor]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
