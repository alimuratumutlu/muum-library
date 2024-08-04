import classNames from "classnames";
import React from "react";

type ProgressBarProps = {
	progress: number; // Current progress value (0-100)
	label?: string; // Custom label to display
	showPercentage?: boolean; // Whether to show percentage label
	color?: "blue" | "green" | "red" | "yellow"; // Color of the progress bar
	striped?: boolean; // Whether the progress bar is striped
	animated?: boolean; // Whether the progress bar has an animation
	className?: string; // Additional custom classes
};

const ProgressBar: React.FC<ProgressBarProps> = ({
	progress,
	label,
	showPercentage = false,
	color = "blue",
	striped = false,
	animated = false,
	className = "",
}) => {
	const colorClasses = {
		blue: "bg-blue-500",
		green: "bg-green-500",
		red: "bg-red-500",
		yellow: "bg-yellow-500",
	};

	return (
		<div
			className={classNames(
				"w-full h-4 bg-gray-200 rounded overflow-hidden",
				className
			)}
			role="progressbar"
			aria-valuenow={progress}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-label={label}
		>
			<div
				className={classNames("h-full", colorClasses[color], {
					"bg-striped": striped,
					"bg-animated": animated,
				})}
				style={{ width: `${progress}%` }}
			/>
			{(showPercentage || label) && (
				<div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
					{label ? label : `${progress}%`}
				</div>
			)}
		</div>
	);
};

export default ProgressBar;
