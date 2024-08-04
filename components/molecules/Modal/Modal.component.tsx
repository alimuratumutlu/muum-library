import { IconX } from "@tabler/icons-react";
import classNames from "classnames";
import React from "react";

type ModalProps = {
	isVisible: boolean; // Controls the visibility of the modal
	onClose: () => void; // Callback function to close the modal
	header?: React.ReactNode; // Optional header content
	content: React.ReactNode; // Main content of the modal
	footer?: React.ReactNode; // Optional footer content
	className?: string; // Additional custom classes
	closeOnOverlayClick?: boolean; // Whether to close the modal when clicking outside
};

const Modal: React.FC<ModalProps> = ({
	isVisible,
	onClose,
	header,
	content,
	footer,
	className = "",
	closeOnOverlayClick = true,
}) => {
	if (!isVisible) return null;

	const handleOverlayClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (closeOnOverlayClick && e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
			onClick={handleOverlayClick}
		>
			<div
				className={classNames(
					"bg-white rounded-lg shadow-lg max-w-lg w-full mx-4",
					className
				)}
				role="dialog"
				aria-modal="true"
			>
				{header && (
					<div className="flex justify-between items-center p-4 border-b border-gray-200">
						{header}
						<button onClick={onClose} aria-label="Close">
							<IconX className="w-5 h-5 text-gray-500 hover:text-gray-700" />
						</button>
					</div>
				)}
				<div className="p-4">{content}</div>
				{footer && <div className="p-4 border-t border-gray-200">{footer}</div>}
			</div>
		</div>
	);
};

export default Modal;
