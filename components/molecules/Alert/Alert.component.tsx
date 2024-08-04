import {
	IconAlertCircle,
	IconCheck,
	IconInfoCircle,
	IconX,
} from "@tabler/icons-react";
import classNames from "classnames";
import React, { useState } from "react";

type AlertProps = {
	type?: "success" | "error" | "warning" | "info"; // Type of alert
	message: React.ReactNode; // Content of the alert
	dismissible?: boolean; // Whether the alert is dismissible
	onClose?: () => void; // Callback when the alert is closed
	className?: string; // Additional custom classes
};

const Alert: React.FC<AlertProps> = ({
	type = "info",
	message,
	dismissible = false,
	onClose,
	className = "",
}) => {
	const [visible, setVisible] = useState(true);

	const handleClose = () => {
		setVisible(false);
		if (onClose) onClose();
	};

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

	if (!visible) return null;

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
			{dismissible && (
				<button
					onClick={handleClose}
					className="ml-4 text-gray-500 hover:text-gray-700"
					aria-label="Close"
				>
					<IconX className="w-5 h-5" />
				</button>
			)}
		</div>
	);
};

export default Alert;
