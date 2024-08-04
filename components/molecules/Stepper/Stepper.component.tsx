import { IconCheck } from "@tabler/icons-react";
import classNames from "classnames";
import React from "react";

type Step = {
	label: string;
	icon?: React.ReactNode;
};

type StepperProps = {
	steps: Step[]; // Array of steps
	currentStep: number; // Index of the current step
	onStepClick?: (index: number) => void; // Click handler for steps
	orientation?: "horizontal" | "vertical"; // Layout orientation
	className?: string; // Additional custom classes
};

const Stepper: React.FC<StepperProps> = ({
	steps,
	currentStep,
	onStepClick,
	orientation = "horizontal",
	className = "",
}) => {
	return (
		<div
			className={classNames(
				"flex",
				{
					"flex-col": orientation === "vertical",
					"flex-row": orientation === "horizontal",
				},
				className
			)}
			role="progressbar"
			aria-valuenow={currentStep}
			aria-valuemin={0}
			aria-valuemax={steps.length - 1}
		>
			{steps.map((step, index) => {
				const isCompleted = index < currentStep;
				const isCurrent = index === currentStep;

				return (
					<div
						key={index}
						className={classNames("flex items-center", {
							"cursor-pointer": onStepClick,
							"flex-col": orientation === "vertical",
							"flex-row": orientation === "horizontal",
						})}
						onClick={() => onStepClick && onStepClick(index)}
						aria-current={isCurrent ? "step" : undefined}
					>
						<div
							className={classNames(
								"flex items-center justify-center w-8 h-8 rounded-full",
								{
									"bg-blue-500 text-white": isCurrent,
									"bg-gray-200 text-gray-500": !isCurrent && !isCompleted,
									"bg-green-500 text-white": isCompleted,
								}
							)}
						>
							{isCompleted ? (
								<IconCheck className="w-5 h-5" />
							) : (
								step.icon || <span>{index + 1}</span>
							)}
						</div>
						<span
							className={classNames("ml-2", {
								"text-blue-500": isCurrent,
								"text-gray-500": !isCurrent && !isCompleted,
								"text-green-500": isCompleted,
								"ml-0 mt-2": orientation === "vertical",
							})}
						>
							{step.label}
						</span>
						{index < steps.length - 1 && (
							<div
								className={classNames("flex-grow border-t-2", {
									"border-blue-500": isCompleted,
									"border-gray-200": !isCompleted,
									"w-0 h-full mx-2": orientation === "vertical",
									"w-full h-0 my-2": orientation === "horizontal",
								})}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Stepper;
