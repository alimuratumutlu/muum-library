import classNames from "classnames";
import React from "react";

type BreadcrumbItem = {
	label: string;
	href?: string;
	onClick?: () => void;
};

type BreadcrumbProps = {
	items: BreadcrumbItem[]; // Array of breadcrumb items
	separator?: React.ReactNode; // Custom separator between items
	className?: string; // Additional custom classes
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
	items,
	separator = "/",
	className = "",
}) => {
	return (
		<nav aria-label="Breadcrumb" className={className}>
			<ol className="flex space-x-2">
				{items.map((item, index) => (
					<li key={index} className="flex items-center">
						{item.href || item.onClick ? (
							<a
								href={item.href}
								onClick={item.onClick}
								className="text-blue-500 hover:underline"
								aria-current={index === items.length - 1 ? "page" : undefined}
							>
								{item.label}
							</a>
						) : (
							<span
								className={classNames({
									"text-gray-500": index !== items.length - 1,
									"font-semibold": index === items.length - 1,
								})}
							>
								{item.label}
							</span>
						)}
						{index < items.length - 1 && (
							<span className="mx-2 text-gray-400">{separator}</span>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
