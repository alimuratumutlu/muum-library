import {
	IconAlertCircle,
	IconCheck,
	IconInfoCircle,
	IconX,
} from "@tabler/icons-react";
import classNames from "classnames";
import React, { useEffect } from "react";

type NotificationProps = {
	type?: "success" | "error" | "warning" | "info"; // Type of notification
	message: string; // Message to display
	onClose: () => void; // Callback when the notification is closed
	autoDismiss?: boolean; // Whether to auto-dismiss the notification
	autoDismissTime?: number; // Auto-dismiss time in milliseconds
	className?: string; // Additional custom classes
};

const Notification: React.FC<NotificationProps> = ({
	type = "info",
	message,
	onClose,
	autoDismiss = false,
	autoDismissTime = 3000,
	className = "",
}) => {
	useEffect(() => {
		if (autoDismiss) {
			const timer = setTimeout(onClose, autoDismissTime);
			return () => clearTimeout(timer);
		}
	}, [autoDismiss, autoDismissTime, onClose]);

	const typeClasses = {
		success: "bg-green-100 text-green-700",
		error: "bg-red-100 text-red-700",
		warning: "bg-yellow-100 text-yellow-700",
		info: "bg-blue-100 text-blue-700",
	};

	const typeIcons = {
		success: <IconCheck className="w-5 h-5" />,
		error: <IconAlertCircle className="w-5 h-5" />,
		warning: <IconAlertCircle className="w-5 h-5" />,
		info: <IconInfoCircle className="w-5 h-5" />,
	};

	return (
		<div
			className={classNames(
				"flex items-center p-4 rounded shadow-md",
				typeClasses[type],
				className
			)}
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
		>
			<div className="flex-shrink-0 mr-2">{typeIcons[type]}</div>
			<div className="flex-grow">{message}</div>
			<button
				onClick={onClose}
				className="ml-4 text-gray-500 hover:text-gray-700"
				aria-label="Close"
			>
				<IconX className="w-5 h-5" />
			</button>
		</div>
	);
};

export default Notification;
