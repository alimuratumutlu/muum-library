export const debounce = <F extends (...args: any[]) => void>(
	func: F,
	wait: number
): F => {
	let timeout: NodeJS.Timeout;
	return function (...args: any[]) {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	} as F;
};

export const throttle = <F extends (...args: any[]) => void>(
	func: F,
	limit: number
): F => {
	let inThrottle: boolean;
	return function (...args: any[]) {
		if (!inThrottle) {
			func(...args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	} as F;
};
