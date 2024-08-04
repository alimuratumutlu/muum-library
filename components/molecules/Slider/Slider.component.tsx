import classNames from "classnames";
import React, { useState } from "react";

type SliderProps = {
	min: number; // Minimum value
	max: number; // Maximum value
	step?: number; // Step increment
	value: number | [number, number]; // Current value or range
	onChange: (value: number | [number, number]) => void; // Change handler
	isRange?: boolean; // Whether the slider is a range slider
	showTooltip?: boolean; // Whether to show tooltips
	className?: string; // Additional custom classes
};

const Slider: React.FC<SliderProps> = ({
	min,
	max,
	step = 1,
	value,
	onChange,
	isRange = false,
	showTooltip = true,
	className = "",
}) => {
	const [activeThumb, setActiveThumb] = useState<null | number>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		thumbIndex?: number
	) => {
		let newValue = isRange
			? [...(value as [number, number])]
			: e.target.valueAsNumber;

		if (isRange && thumbIndex !== undefined) {
			newValue[thumbIndex] = e.target.valueAsNumber;

			if (thumbIndex === 0 && newValue[0] > newValue[1]) {
				newValue[0] = newValue[1];
			} else if (thumbIndex === 1 && newValue[1] < newValue[0]) {
				newValue[1] = newValue[0];
			}
		}

		onChange(newValue);
	};

	const renderThumb = (thumbValue: number, thumbIndex?: number) => (
		<div
			className="relative"
			key={thumbIndex}
			onMouseDown={() => setActiveThumb(thumbIndex)}
			onMouseUp={() => setActiveThumb(null)}
		>
			<input
				type="range"
				min={min}
				max={max}
				step={step}
				value={thumbValue}
				onChange={(e) => handleChange(e, thumbIndex)}
				className="absolute w-full h-0 appearance-none bg-transparent pointer-events-none"
				aria-valuemin={min}
				aria-valuemax={max}
				aria-valuenow={thumbValue}
			/>
			<div
				className={classNames(
					"absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full pointer-events-auto",
					{
						"ring-2 ring-blue-300": activeThumb === thumbIndex,
					}
				)}
				style={{ left: `${((thumbValue - min) / (max - min)) * 100}%` }}
			/>
			{showTooltip && (
				<div
					className="absolute transform -translate-x-1/2 -translate-y-full mt-1 text-xs bg-gray-700 text-white p-1 rounded"
					style={{ left: `${((thumbValue - min) / (max - min)) * 100}%` }}
				>
					{thumbValue}
				</div>
			)}
		</div>
	);

	return (
		<div className={classNames("relative h-6", className)}>
			<div className="absolute w-full h-1 bg-gray-300 rounded"></div>
			{isRange ? (
				<>
					{renderThumb((value as [number, number])[0], 0)}
					{renderThumb((value as [number, number])[1], 1)}
				</>
			) : (
				renderThumb(value as number)
			)}
		</div>
	);
};

export default Slider;
