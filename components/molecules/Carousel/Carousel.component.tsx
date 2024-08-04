import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

type CarouselProps = {
	slides: React.ReactNode[]; // Array of slides
	autoPlay?: boolean; // Whether the carousel should auto-play
	interval?: number; // Interval for auto-play in milliseconds
	showIndicators?: boolean; // Whether to show slide indicators
	className?: string; // Additional custom classes
};

const Carousel: React.FC<CarouselProps> = ({
	slides,
	autoPlay = false,
	interval = 3000,
	showIndicators = true,
	className = "",
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (autoPlay) {
			const timer = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
			}, interval);
			return () => clearInterval(timer);
		}
	}, [autoPlay, interval, slides.length]);

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	const goToNextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
	};

	const goToPreviousSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + slides.length) % slides.length
		);
	};

	return (
		<div className={classNames("relative overflow-hidden", className)}>
			<div
				className="flex transition-transform duration-300"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{slides.map((slide, index) => (
					<div key={index} className="flex-none w-full">
						{slide}
					</div>
				))}
			</div>
			<button
				onClick={goToPreviousSlide}
				className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
				aria-label="Previous slide"
			>
				<IconChevronLeft className="w-5 h-5" />
			</button>
			<button
				onClick={goToNextSlide}
				className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
				aria-label="Next slide"
			>
				<IconChevronRight className="w-5 h-5" />
			</button>
			{showIndicators && (
				<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={classNames("w-2 h-2 rounded-full", {
								"bg-blue-500": index === currentIndex,
								"bg-gray-300": index !== currentIndex,
							})}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Carousel;
