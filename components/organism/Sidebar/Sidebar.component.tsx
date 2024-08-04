import {
	IconDashboard,
	IconMenu,
	IconSettings,
	IconUser,
	IconX,
} from "@tabler/icons-react";
import React, { useState } from "react";

const Sidebar: React.FC = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div
			className={`flex ${
				isCollapsed ? "w-20" : "w-64"
			} transition-width duration-300 bg-gray-800 h-screen p-4`}
		>
			<div className="flex flex-col justify-between h-full">
				{/* Logo and Collapse Button */}
				<div className="flex items-center justify-between">
					{!isCollapsed && (
						<img src="/path/to/logo.png" alt="Logo" className="h-10" />
					)}
					<button onClick={toggleSidebar} className="text-white">
						{isCollapsed ? (
							<IconMenu className="w-6 h-6" />
						) : (
							<IconX className="w-6 h-6" />
						)}
					</button>
				</div>

				{/* Navigation Links */}
				<nav className="flex flex-col mt-10 space-y-4">
					<a
						href="#dashboard"
						className="flex items-center text-white hover:text-blue-500"
					>
						<IconDashboard className="w-6 h-6 mr-3" />
						{!isCollapsed && <span>Dashboard</span>}
					</a>
					<a
						href="#profile"
						className="flex items-center text-white hover:text-blue-500"
					>
						<IconUser className="w-6 h-6 mr-3" />
						{!isCollapsed && <span>Profile</span>}
					</a>
					<a
						href="#settings"
						className="flex items-center text-white hover:text-blue-500"
					>
						<IconSettings className="w-6 h-6 mr-3" />
						{!isCollapsed && <span>Settings</span>}
					</a>
				</nav>

				{/* Footer or Additional Info */}
				<div className="text-white mt-auto">
					{!isCollapsed && <p>© 2024 Your Company</p>}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
