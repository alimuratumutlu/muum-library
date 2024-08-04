import { IconMenu, IconSearch, IconSparkles, IconX } from "@tabler/icons-react";
import React, { useState } from "react";

const Header: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="bg-white shadow-md">
			<div className="container mx-auto flex items-center justify-between p-4">
				{/* Logo Section */}
				<div className="flex items-center space-x-2">
					<img src="/path/to/logo.png" alt="Logo" className="h-8" />
					<div className="flex space-x-1">
						<span className="w-2 h-2 bg-blue-500 rounded-full"></span>
						<span className="w-2 h-2 bg-red-500 rounded-full"></span>
						<span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
						<span className="w-2 h-2 bg-green-500 rounded-full"></span>
					</div>
				</div>

				{/* Navigation Menu */}
				<div className="hidden md:flex space-x-6">
					<a href="#home" className="text-gray-700 hover:text-blue-500">
						Home
					</a>
					<a href="#features" className="text-gray-700 hover:text-blue-500">
						Features
					</a>
					<a href="#pricing" className="text-gray-700 hover:text-blue-500">
						Pricing
					</a>
					<a href="#contact" className="text-gray-700 hover:text-blue-500">
						Contact
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button onClick={toggleMenu} className="md:hidden">
					{menuOpen ? (
						<IconX className="w-6 h-6" />
					) : (
						<IconMenu className="w-6 h-6" />
					)}
				</button>

				{/* Search Input */}
				<div className="flex-1 mx-4 hidden md:block">
					<div className="relative">
						<IconSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
						<input
							type="text"
							placeholder="Search"
							className="w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
					</div>
				</div>

				{/* Button Group */}
				<div className="hidden md:flex space-x-2">
					<button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
						Log in
					</button>
					<button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center hover:bg-green-600">
						<IconSparkles className="mr-2" />
						Try for Free!
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden bg-white shadow-lg">
					<div className="flex flex-col p-4 space-y-2">
						<a href="#home" className="text-gray-700 hover:text-blue-500">
							Home
						</a>
						<a href="#features" className="text-gray-700 hover:text-blue-500">
							Features
						</a>
						<a href="#pricing" className="text-gray-700 hover:text-blue-500">
							Pricing
						</a>
						<a href="#contact" className="text-gray-700 hover:text-blue-500">
							Contact
						</a>
						<button className="px-4 py-2 mt-2 border rounded-md text-gray-700 hover:bg-gray-100">
							Log in
						</button>
						<button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center hover:bg-green-600">
							<IconSparkles className="mr-2" />
							Try for Free!
						</button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
