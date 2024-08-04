import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import classNames from "classnames";
import React from "react";

type PaginationProps = {
	currentPage: number; // Current active page
	totalPages: number; // Total number of pages
	onPageChange: (page: number) => void; // Callback to change page
	showFirstLast?: boolean; // Whether to show first/last page buttons
	className?: string; // Additional custom classes
};

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
	showFirstLast = false,
	className = "",
}) => {
	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	);

	const handlePageChange = (page: number) => {
		if (page < 1 || page > totalPages || page === currentPage) return;
		onPageChange(page);
	};

	return (
		<nav aria-label="Pagination" className={className}>
			<ul className="flex justify-center space-x-1">
				{showFirstLast && (
					<li>
						<button
							onClick={() => handlePageChange(1)}
							disabled={currentPage === 1}
							className="px-3 py-1 rounded text-gray-500 hover:bg-gray-200 disabled:text-gray-300"
							aria-label="First Page"
						>
							First
						</button>
					</li>
				)}
				<li>
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="px-3 py-1 rounded text-gray-500 hover:bg-gray-200 disabled:text-gray-300"
						aria-label="Previous Page"
					>
						<IconChevronLeft className="w-4 h-4" />
					</button>
				</li>
				{pageNumbers.map((page) => (
					<li key={page}>
						<button
							onClick={() => handlePageChange(page)}
							className={classNames("px-3 py-1 rounded", {
								"bg-blue-500 text-white": page === currentPage,
								"text-gray-500 hover:bg-gray-200": page !== currentPage,
							})}
							aria-current={page === currentPage ? "page" : undefined}
						>
							{page}
						</button>
					</li>
				))}
				<li>
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="px-3 py-1 rounded text-gray-500 hover:bg-gray-200 disabled:text-gray-300"
						aria-label="Next Page"
					>
						<IconChevronRight className="w-4 h-4" />
					</button>
				</li>
				{showFirstLast && (
					<li>
						<button
							onClick={() => handlePageChange(totalPages)}
							disabled={currentPage === totalPages}
							className="px-3 py-1 rounded text-gray-500 hover:bg-gray-200 disabled:text-gray-300"
							aria-label="Last Page"
						>
							Last
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Pagination;
