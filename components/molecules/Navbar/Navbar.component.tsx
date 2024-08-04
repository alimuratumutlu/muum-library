import { IconMenu2, IconX } from "@tabler/icons-react";
import classNames from "classnames";
import React, { useState } from "react";

type NavbarProps = {
	brand: React.ReactNode; // Branding element, such as a logo or brand name
	links: {
		label: string;
		href: string;
		dropdownItems?: { label: string; href: string }[];
	}[]; // Navigation links with optional dropdowns
	className?: string; // Additional custom classes
};

const Navbar: React.FC<NavbarProps> = ({ brand, links, className = "" }) => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className={classNames("bg-white border-b border-gray-200", className)}>
			<div className="container mx-auto flex items-center justify-between px-4 py-3">
				<div className="flex items-center">
					<div className="text-xl font-bold">{brand}</div>
				</div>
				<div className="hidden md:flex space-x-4">
					{links.map((link, index) => (
						<div key={index} className="relative group">
							<a
								href={link.href}
								className="px-3 py-2 text-gray-700 hover:text-blue-500"
							>
								{link.label}
							</a>
							{link.dropdownItems && (
								<div className="absolute left-0 hidden mt-1 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
									{link.dropdownItems.map((item, subIndex) => (
										<a
											key={subIndex}
											href={item.href}
											className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											{item.label}
										</a>
									))}
								</div>
							)}
						</div>
					))}
				</div>
				<div className="flex md:hidden">
					<button onClick={toggleMobileMenu} aria-label="Toggle navigation">
						{isMobileMenuOpen ? (
							<IconX className="w-6 h-6 text-gray-700" />
						) : (
							<IconMenu2 className="w-6 h-6 text-gray-700" />
						)}
					</button>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="md:hidden">
					{links.map((link, index) => (
						<div key={index} className="border-t border-gray-200">
							<a
								href={link.href}
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								{link.label}
							</a>
							{link.dropdownItems && (
								<div className="pl-4">
									{link.dropdownItems.map((item, subIndex) => (
										<a
											key={subIndex}
											href={item.href}
											className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											{item.label}
										</a>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
