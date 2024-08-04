export const chunkArray = <T>(array: T[], size: number): T[][] => {
	return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
		array.slice(index * size, index * size + size)
	);
};

export const uniqueArray = <T>(array: T[]): T[] => {
	return [...new Set(array)];
};

export const flattenArray = <T>(array: T[][]): T[] => {
	return array.reduce((acc, val) => acc.concat(val), []);
};
